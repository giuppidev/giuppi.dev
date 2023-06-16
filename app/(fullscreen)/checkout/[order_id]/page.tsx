import { createServerSupabaseClient } from "@/app/supabase-server";
import { stripe } from "@/utils/stripe";
import {
  inviteUser,
  retrieveAndSetStripeCustomer,
} from "@/utils/supabase-admin";
import { supabase } from "@supabase/auth-ui-shared";

export default async function OrderDetail({
  searchParams,
  params,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
  params: { order_id: string };
}) {
  const orderId = params.order_id as string;
  const stripeSessionId = searchParams.session_id as string;
  const supabase = createServerSupabaseClient();
  const { data: user } = await supabase.auth.getUser();

  const { data: order } = await supabase
    .from("orders")
    .select()
    .eq("id", orderId)
    .single();
  let session;
  if (order) {
    if (stripeSessionId || order?.stripe_session_id) {
      session = await stripe.checkout.sessions.retrieve(
        stripeSessionId ?? order?.stripe_session_id
      );

      const payment = await stripe.paymentIntents.retrieve(
        session.payment_intent as string
      );

      // order payment update
      if (payment.status && payment.status !== order?.payment) {
        await supabase
          .from("orders")
          .update({
            payment: payment.status,
          })
          .eq("id", orderId);
      }

      if (!order.user_id) {
        if (!user.user) {
          const { data: registeredUser } = await supabase
            .from("profiles")
            .select()
            .eq("email", session.customer_details?.email)
            .single();

          if (registeredUser) {
            await supabase
              .from("orders")
              .update({
                user_id: registeredUser.id,
              })
              .eq("id", order.id);
          }

          if (!registeredUser && session.customer_details?.email) {
            const newUser = await inviteUser({
              email: session.customer_details?.email,
            });
            console.log({ newUser });
            if (newUser) {
              await supabase
                .from("orders")
                .update({
                  user_id: newUser.id,
                })
                .eq("id", order.id);
            }
          }
        } else {
          await supabase
            .from("orders")
            .update({
              user_id: user.user.id,
            })
            .eq("id", order.id);
        }
      } else {
        await retrieveAndSetStripeCustomer({
          email: session.customer_details?.email || "",
        });
      }
    }
    // if (!order?.user_id && user.user) {
    //   await supabase
    //     .from("orders")
    //     .update({
    //       user_id: user.user?.id,
    //     })
    //     .eq("id", orderId);
    // }

    // const { data, error } = await supabase
    //   .from("profiles")
    //   .select("stripe_customer_id")
    //   .eq("id", user.user?.id)
    //   .single();

    // if (error || !data?.stripe_customer_id) {
    //   await supabase
    //     .from("profiles")
    //     .update({
    //       stripe_customer_id: customer.id,
    //     })
    //     .eq("id", user.user?.id);
    // }
  }
  return (
    <div>
      <pre>{JSON.stringify(order, null, 2)}</pre>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      {/* <pre>{JSON.stringify(customer, null, 2)}</pre> */}
      {!user.user && (
        <div>
          <a
            href={`/sign-in?redirectTo=/order/${order?.id}?session_id=${stripeSessionId}`}
          >
            Vai a login
          </a>
        </div>
      )}
    </div>
  );
}
