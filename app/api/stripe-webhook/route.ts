import { supabaseAdmin } from "@/utils/supabase-admin";
import { stripe } from "./../../../utils/stripe";
import Error from "next/error";
import { headers } from "next/headers";
import { type NextRequest } from "next/server";
import { Database } from "@/types/supabase";
import Stripe from "stripe";

type Customer = Database["public"]["Tables"]["profiles"]["Row"];

export async function POST(req: NextRequest) {
  let event;
  const body = await req.text(); // Otherwise use the basic event deserialized with JSON.parse
  const requestHeaders = new Headers(req.headers);

  // Get the signature sent by Stripe
  const sig = requestHeaders.get("stripe-signature") as string | string[];
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_KEY ?? ""
    );
  } catch (err: any) {
    return (
      new Response(),
      {
        status: 400,
      }
    );
  }
  console.log(event);
  try {
    // Handle the event
    switch (event.type) {
      case "payment_intent.succeeded":
        const paymentIntent = event.data.object as any;
        console.log(
          `PaymentIntent for ${paymentIntent.amount} was successful!`
        );
        // Then define and call a method to handle the successful payment intent.
        // handlePaymentIntentSucceeded(paymentIntent);
        break;
      case "customer.created":
        const customer = event.data.object as Stripe.Customer;
        if (customer && customer.id) {
          const { error: supabaseError } = await supabaseAdmin
            .from("profiles")
            .update({
              stripe_customer_id: customer.id,
            })
            .eq("email", customer.id);
        }

        break;
      default:
        // Unexpected event type
        console.log(`Unhandled event type ${event.type}.`);
    }

    return (
      new Response(),
      {
        status: 200,
      }
    );
  } catch (err: any) {
    return (
      new Response(),
      {
        status: 400,
      }
    );
  }
}
