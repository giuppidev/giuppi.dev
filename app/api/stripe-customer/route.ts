import { supabaseAdmin } from "./../../../utils/supabase-admin";
import { type NextRequest } from "next/server";
import { stripe } from "./../../../utils/stripe";

export async function POST(req: NextRequest) {
  let event;
  const { email, name } = await req.json();

  try {
    const newCustomer = await stripe.customers.create({
      email,
      name,
    });
    const { error: supabaseError } = await supabaseAdmin
      .from("profiles")
      .update({ stripe_customer_id: newCustomer.id })
      .eq("email", email);
    if (supabaseError) {
      return (
        new Response(),
        {
          status: 400,
        }
      );
    }
  } catch (err: any) {
    return (
      new Response(),
      {
        status: 400,
      }
    );
  }

  return (
    new Response(),
    {
      status: 200,
    }
  );
}
