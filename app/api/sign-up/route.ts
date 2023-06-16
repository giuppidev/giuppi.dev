import { stripe } from "@/utils/stripe";
import { supabaseAdmin } from "@/utils/supabase-admin";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password, first_name, last_name } = await req.json();
  try {
    const { data, error } = await supabaseAdmin.auth.admin.createUser({
      email: email,
      password: password,

      email_confirm: true,
    });
    if (error) {
      return NextResponse.json({ status: 500, statusText: error.message });
    }

    const newCustomer = await stripe.customers.create({
      email,
      name: `${first_name} ${last_name}`,
    });
    const { error: supabaseError } = await supabaseAdmin
      .from("profiles")
      .update({ stripe_customer_id: newCustomer.id })
      .eq("email", email);
    if (supabaseError) {
      return NextResponse.json({
        status: 500,
        statusText: supabaseError.message,
      });
    }
  } catch (err: any) {
    return NextResponse.json({ status: 500, statusText: err.message });
  }
  return NextResponse.json({ status: 200 });
}
