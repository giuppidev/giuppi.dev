import { stripe } from "@/utils/stripe";
import { supabaseAdmin } from "@/utils/supabase-admin";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();
  try {
    const { data, error } = await supabaseAdmin.auth.admin.createUser({
      email: email,
      password: password,

      email_confirm: true,
    });

    if (error) {
      return NextResponse.json({ status: 500, statusText: error.message });
    }
  } catch (err: any) {
    return NextResponse.json({ status: 500, statusText: err.message });
  }
  return NextResponse.json({ status: 200 });
}
