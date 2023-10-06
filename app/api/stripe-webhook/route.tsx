import { createServerSupabaseClient } from "@/app/supabase-server";
import OrderEmail from "@/emails";
import MentorshipEmail from "@/emails/mentorship";
import Newsub from "@/emails/newsub";
import { stripe } from "@/utils/stripe";
import { render } from "@react-email/render";
import { NextResponse, type NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const transporter = nodemailer.createTransport({
    host: "mail.smtp2go.com",
    port: 2525,
    secure: false,
    auth: {
      user: process.env.SMTP2GO_USER,
      pass: process.env.SMTP2GO_PWD,
    },
  });
  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });

  let event;
  const body = await req.text(); // Otherwise use the basic event deserialized with JSON.parse
  const requestHeaders = new Headers(req.headers);

  const supabase = createServerSupabaseClient();

  // Get the signature sent by Stripe
  const sig = requestHeaders.get("stripe-signature") as string | string[];
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_KEY ?? ""
    );
  } catch (err: any) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  try {
    // Handle the event
    switch (event.type) {
      case "invoice.paid":
        const res = event.data.object as any;

        const customer_email = res.customer_email;

        const subscription = res.subscription;

        const { error } = await supabase.from("subscriptions").upsert(
          {
            email: customer_email || "",
            stripe_id: subscription || "",
          },
          { onConflict: "email" }
        );

        if (error) {
          console.log({ subError: error });
        }

        try {
          const emailHtml = render(<OrderEmail />);
          console.log("customer_email", customer_email);

          const options = {
            from: '"Giuseppe Funicello" <info@giuppi.dev>',
            to: customer_email,
            subject: "🚀 Benvenuto nella giuppi<dev> academy!",
            html: emailHtml,
          };
          if (customer_email) {
            await new Promise((resolve, reject) => {
              // send mail
              transporter.sendMail(options, (err, info) => {
                if (err) {
                  console.error(err);
                  console.log("error sending");

                  reject(err);
                } else {
                  console.log(info);
                  console.log("sent");

                  resolve(info);
                }
              });
            });
            const notificationEmailHtml = render(
              <Newsub email={customer_email} />
            );

            const notificationOptions = {
              from: '"Giuseppe Funicello" <info@giuppi.dev>',
              to: "info@giuppi.dev",
              subject: "🚀 Benvenuto nella giuppi<dev> academy!",
              html: notificationEmailHtml,
            };
            await new Promise((resolve, reject) => {
              // send mail
              transporter.sendMail(notificationOptions, (err, info) => {
                if (err) {
                  console.error(err);
                  console.log("error sending");
                  reject(err);
                } else {
                  console.log(info);
                  console.log("sent notification");

                  resolve(info);
                }
              });
            });
          }
        } catch (e) {
          console.log({ invioError: JSON.stringify(e) });
        }

        break;
      case "checkout.session.completed":
        const { status, customer_details, metadata } = event.data.object as any;

        const mentorship_customer_email = customer_details.email;

        if (
          status === "complete" &&
          mentorship_customer_email &&
          metadata.product === "mentorship"
        ) {
          const mentorEmailHtml = render(
            <MentorshipEmail
              name={customer_details.name}
              duration={metadata.duration || "30"}
            />
          );

          const optionsMentor = {
            from: '"Giuseppe Funicello" <info@giuppi.dev>',
            to: mentorship_customer_email,
            subject: "🚀 La tua mentorship ti aspetta!",
            html: mentorEmailHtml,
          };
          try {
            if (mentorship_customer_email) {
              transporter.sendMail(optionsMentor);
            }
          } catch (e) {
            console.log(e);
          }
        }
        break;
      default:
        // Unexpected event type
        console.log(`Unhandled event type ${event.type}.`);
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err: any) {
    console.log(err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
