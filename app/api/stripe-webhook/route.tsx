import { createServerSupabaseClient } from "@/app/supabase-server";
import OrderEmail from "@/emails";
import MentorshipEmail from "@/emails/mentorship";
import Newsub from "@/emails/newsub";
import { sendMail } from "@/utils/nodemailer";
import { stripe } from "@/utils/stripe";
import { render } from "@react-email/render";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(req: NextRequest) {
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
      case "invoice.payment_succeeded":
        const paymentInvoiceSucceeded = event.data.object as any;

        const {
          amount_paid,
          customer_email,
          customer_name,
          created,
          payment_intent,
          subscription,
          billing_reason,
        } = paymentInvoiceSucceeded.customer_email;

        if (billing_reason === "subscription_cycle") {
          const nodeUrl = process.env.NODE_FISCOZEN;
          const customHeaders = {
            "Content-Type": "application/json",
          };

          const data = {
            amount_paid,
            customer_email,
            customer_name,
            created,
          };
          await fetch(`${nodeUrl}create-invoice`, {
            method: "POST",
            headers: customHeaders,
            body: JSON.stringify(data),
          });
          return NextResponse.json({
            message: "Subcription cycle",
            success: true,
          });
        }
        if (billing_reason !== "subscription_create") {
          return NextResponse.json({
            message: "Subcription state unknow",
            success: true,
          });
        }

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

          const options = {
            from: '"Giuseppe Funicello" <info@giuppi.dev>',
            to: customer_email,
            subject: "🚀 Benvenuto nella giuppi<dev> academy!",
            html: emailHtml,
          };
          if (customer_email) {
            await sendMail(options);

            const notificationEmailHtml = render(
              <Newsub email={customer_email} payment_intent={payment_intent} />
            );

            const notificationOptions = {
              from: '"Giuseppe Funicello" <info@giuppi.dev>',
              to: "info@giuppi.dev",
              subject: "🚀 Nuovo iscritto alla giuppi<dev> academy!",
              html: notificationEmailHtml,
            };
            await sendMail(notificationOptions);
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
              await sendMail(optionsMentor);
            }
          } catch (e) {
            console.log(e);
          }
        }
        break;
      case "customer.subscription.deleted":
        const { id } = event.data.object as any;

        await supabase
          .from("subscriptions")
          .update({
            active: false,
          })
          .eq("stripe_id", id);

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
