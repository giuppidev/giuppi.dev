"use server";

import { stripe } from "@/utils/stripe";
import { supabaseAdmin } from "@/utils/supabase-admin";
import { createServerSupabaseClient } from "../../supabase-server";

interface ActionResponse {
  error?: string;
}

interface CreateNewUserResponse extends ActionResponse {
  userId?: string;
}

type StripeAddress = {
  line1: string;
  line2: string | null;
  city: string;
  state: string;
  postal_code: string;
  country: string;
};

export async function createNewUser({
  email,
  password,
  firstName,
  lastName,
  address,
}: {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  address?: StripeAddress;
}): Promise<CreateNewUserResponse> {
  try {
    const { data, error: userError } =
      await supabaseAdmin.auth.admin.createUser({
        email: email,
        password: password,
        user_metadata: {
          firstName,
          lastName,
          address,
        },
        email_confirm: true,
      });
    if (userError?.status === 422) {
      return { error: "Utente già registrato, effettua il login" };
    } else if (!!userError) {
      return { error: "Errore in fase creazione utente." + userError?.status };
    }

    const { stripeCustomerId } = await createOrRetrieveCustomer({
      email,
      uuid: data.user.id,
    });

    const { error: supabaseError } = await supabaseAdmin
      .from("profiles")
      .update({
        stripe_customer_id: stripeCustomerId,
        first_name: firstName,
        last_name: lastName,
      })
      .eq("email", email);

    if (supabaseError) {
      throw supabaseError;
    }

    return { userId: data.user.id };
  } catch (error) {
    return { error: "Errore in fase di registrazione utente." };
  }
}

interface CreateNewOrderResponse extends ActionResponse {
  orderId?: number;
}

export async function createOrder({
  userId,
  productId,
  stripe_payment_intent_id,
}: {
  userId: string;
  productId: number;
  stripe_payment_intent_id: string;
}): Promise<CreateNewOrderResponse> {
  const supabase = createServerSupabaseClient();

  const { data, error } = await supabase
    .from("orders")
    .select()
    .eq("user_id", userId)
    .eq("product_id", productId)
    .single();

  if (data) {
    return { error: "Ordine già esistente" };
  }

  const { error: orderError, data: order } = await supabase
    .from("orders")
    .insert({
      user_id: userId,
      stripe_payment_intent_id: stripe_payment_intent_id,
      payment_status: "new",
      product_id: productId,
    })
    .select()
    .single();

  if (orderError) {
    return { error: orderError.message };
  }

  return { orderId: order.id };
}

interface CreateOrRetrieveCustomerResponse extends ActionResponse {
  stripeCustomerId?: string;
}

export async function createOrRetrieveCustomer({
  email,
  uuid,
}: {
  email: string;
  uuid: string;
}): Promise<CreateOrRetrieveCustomerResponse> {
  try {
    const { data, error } = await supabaseAdmin
      .from("profiles")
      .select("stripe_customer_id,first_name, last_name")
      .eq("id", uuid)
      .single();

    let stripeCustomerId = data?.stripe_customer_id;

    if (error || !stripeCustomerId) {
      // No customer record found, let's create one.
      const customerData: {
        metadata: { supabaseUUID: string; firstName: string; lastName: string };
        email?: string;
      } = {
        metadata: {
          supabaseUUID: uuid,
          firstName: data?.first_name || "",
          lastName: data?.first_name || "",
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

      stripeCustomerId = customer.id;
    }
    return { stripeCustomerId };
  } catch (error) {
    return { error: "Errore in fase di creazione customer." };
  }
}

export async function createIntent({
  stripeCustomerId,
  paymentMethod,
  productPrice,
}: {
  stripeCustomerId: string;
  paymentMethod: string;
  productPrice: number;
}) {
  try {
    const intent = await stripe.paymentIntents.create({
      amount: productPrice,
      currency: "eur",
      customer: stripeCustomerId,
      payment_method: paymentMethod,
    });

    return intent;
  } catch (e) {
    return undefined;
  }
}
