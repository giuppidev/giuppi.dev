import { createServerSupabaseClient } from "@/app/supabase-server";
import { OrderEmail, MentorshipEmail } from "@/emails";
import { Database } from "@/types/supabase";
import { transporter } from "@/utils/nodemailer";
import { stripe } from "@/utils/stripe";
import { render } from "@react-email/render";
import { NextResponse, type NextRequest } from "next/server";
type Customer = Database["public"]["Tables"]["profiles"]["Row"];

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

  console.log({ cose: event.data.object });

  try {
    // Handle the event
    switch (event.type) {
      case "invoice.paid":
        const res = event.data.object as any;

        const customer_email = res.customer_email;
        const subscription = res.subscription;
        const customer_name = res.customer_name;

        console.log({ email: customer_email });
        console.log({ subscription: subscription });
        console.log({ customer_name: customer_name });

        const { data: customer, error } = await supabase
          .from("subscriptions")
          .upsert(
            {
              email: customer_email || "",
              stripe_id: subscription || "",
            },
            { onConflict: "email" }
          );

        if (error) {
          console.log(error);
        }

        const emailHtml = render(<OrderEmail name={customer_name} />);

        const options = {
          from: '"Giuseppe Funicello" <info@giuppi.dev>',
          to: customer_email,
          subject: "🚀 Benvenuto nella giuppi<dev> academy!",
          html: emailHtml,
        };
        try {
          if (customer_email) {
            transporter.sendMail(options);
          }
        } catch (e) {
          console.log(e);
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
