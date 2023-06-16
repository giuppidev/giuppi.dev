import { createServerSupabaseClient } from "@/app/supabase-server";
import { stripe } from "@/utils/stripe";

export default async function ConfirmPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const supabase = createServerSupabaseClient();
  const intent = await stripe.paymentIntents.retrieve(
    searchParams.payment_intent as string
  );

  const { data: order, error } = await supabase
    .from("orders")
    .select()
    .eq("stripe_payment_intent_id", searchParams.payment_intent)
    .single();

  if (!order || error) {
    return <div>Ordine non trovato</div>;
  }
  if (order.payment_status !== intent.status) {
    const { error } = await supabase
      .from("orders")
      .update({ payment_status: intent.status })
      .eq("stripe_payment_intent_id", searchParams.payment_intent)
      .single();
  }
  // const customer = await stripe.customers.retrieve(session.customer as string);
  // const payment = await stripe.paymentIntents.retrieve(
  //   session.payment_intent as string
  // );

  return (
    <div>
      <pre>{JSON.stringify(order, null, 2)}</pre>
      {/* <pre>{JSON.stringify(customer, null, 2)}</pre> */}
    </div>
  );
}
