import { getURL, toDateTime } from "./helpers";
import { stripe } from "./stripe";
import { createClient } from "@supabase/supabase-js";
import Stripe from "stripe";
import type { Database } from "@/types/supabase";

// Note: supabaseAdmin uses the SERVICE_ROLE_KEY which you must only use in a secure server-side context
// as it has admin privileges and overwrites RLS policies!
export const supabaseAdmin = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.SUPABASE_SERVICE_ROLE_KEY || ""
);

export const inviteUser = async ({ email }: { email: string }) => {
  const {
    error,
    data: { user },
  } = await supabaseAdmin.auth.admin.inviteUserByEmail(email, {
    redirectTo: `${getURL()}auth/new-user`,
  });
  if (error) {
    throw error;
  }
  return user;
};

export const createOrRetrieveCustomer = async ({
  email,
  uuid,
}: {
  email: string;
  uuid: string;
}) => {
  if (!uuid) {
    return undefined;
  }
  const { data, error } = await supabaseAdmin
    .from("profiles")
    .select("stripe_customer_id")
    .eq("id", uuid)
    .single();

  if (error || !data?.stripe_customer_id) {
    // No customer record found, let's create one.
    const customerData: { metadata: { supabaseUUID: string }; email?: string } =
      {
        metadata: {
          supabaseUUID: uuid,
        },
      };
    if (email) customerData.email = email;
    const customer = await stripe.customers.create(customerData);
    // Now insert the customer ID into our Supabase mapping table.
    const { error: supabaseError } = await supabaseAdmin
      .from("profiles")
      .update({ stripe_customer_id: customer.id })
      .eq("id", uuid);

    if (supabaseError) throw supabaseError;
    console.log(`New customer created and inserted for ${uuid}.`);
    return customer.id;
  }
  return data.stripe_customer_id as string;
};

export const retrieveAndSetStripeCustomer = async ({
  email,
}: {
  email: string;
}) => {
  const res = await stripe.customers.list({
    email,
    limit: 1,
  });

  if (res) {
    const customer = res.data[0];
    if (customer) {
      const { error: supabaseError } = await supabaseAdmin
        .from("profiles")
        .update({ stripe_customer_id: customer.id })
        .eq("email", email);
      if (supabaseError) throw supabaseError;
      return customer.id;
    }
  }
  return null;
};
