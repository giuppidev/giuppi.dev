"use client";
import { useSupabase } from "@/app/supabase-provider";
import { FormMessage } from "@/components/auth/form";
import { Button, Spinner } from "@/components/button";
import { Database } from "@/types/supabase";
import { getURL } from "@/utils/helpers";
import {
  AddressElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { User } from "@supabase/supabase-js";
import { useEffect, useState, useTransition } from "react";
import {
  createIntent,
  createOrRetrieveCustomer,
  createOrder,
} from "../actions";

type Profile = Database["public"]["Tables"]["profiles"]["Row"];

interface SignedProps {
  goToSignup: () => void;
  user: User | null;
  profile?: Profile | null;
  productPrice: number;
  productId: number;
}
export const SignedForm = ({
  goToSignup,
  user,
  profile,
  productPrice,
  productId,
}: SignedProps) => {
  const { supabase } = useSupabase();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();
  const stripe = useStripe();
  const elements = useElements();
  const [customer, setCustomer] = useState();

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      goToSignup();
    }
  };

  const checkout = async () => {
    setLoading(true);
    startTransition(async () => {
      if (!stripe || !elements) {
        return;
      }

      if (!user || !user.email) {
        goToSignup();
        return;
      }

      const { error: submitError } = await elements.submit();
      if (submitError) {
        setError("ERRORE");
        setLoading(false);
        return;
      }

      const { error, paymentMethod } = await stripe.createPaymentMethod({
        elements,
      });

      if (error) {
        setError("ERRORE");
        setLoading(false);
        return;
      }

      const { stripeCustomerId, error: customerError } =
        await createOrRetrieveCustomer({
          email: user.email,
          uuid: user.id,
        });

      if (customerError || !stripeCustomerId) {
        setError("ERRORE");
        setLoading(false);
        return;
      }

      const intent = await createIntent({
        stripeCustomerId,
        productPrice,
        paymentMethod: paymentMethod?.id || "",
      });

      if (!intent) {
        setError("errore in fase di completamento dell'ordine");
        setLoading(false);

        return;
      }

      const { error: orderError, orderId } = await createOrder({
        productId,
        stripe_payment_intent_id: intent.id,
        userId: user.id,
      });

      if (orderError) {
        setError("errore in fase di creazione ordine");
        setLoading(false);

        return;
      }

      const clientSecret = intent.client_secret;
      const { error: confirmError } = await stripe.confirmPayment({
        clientSecret,
        confirmParams: {
          return_url: `${getURL()}/confirm?intent=${intent.id}`,
        },
      } as any);

      if (confirmError) {
        setError("errore in fase di completamento dell'ordine");
      }
      setLoading(false);
    });
  };
  if (!stripe || !elements) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }
  return (
    <div className="px-4 pb-36 pt-16 sm:px-6 lg:col-start-1 lg:row-start-1 lg:px-0 lg:pb-16">
      <div className="mx-auto max-w-lg lg:max-w-none space-y-4">
        <section aria-labelledby="contact-info-heading">
          <h2
            id="contact-info-heading"
            className="text-3xl font-medium text-gray-900 pb-4 "
          >
            Completa l{"'"}ordine
          </h2>
          <div className="grid p-4 bg-white border-4 border-gray-900">
            <div>
              Sei loggato come <span className="font-semibold"></span>
            </div>
            <div className="text-3xl">
              <div>{user?.email}</div>
              <div>
                {user?.user_metadata?.firstName} {user?.user_metadata?.lastName}
              </div>
            </div>
            <p className="text-base text-gray-900 dark:text-gray-400 mt-10 mb-2">
              Non sei tu?{" "}
              <button
                onClick={signOut}
                className="font-medium text-primary-600 hover:underline "
              >
                Continua come altro utente
              </button>
            </p>
          </div>
        </section>
        <div className="grid p-4 bg-white border-4 border-gray-900">
          <span className="text-2xl pb-2">Dati di pagamento</span>

          <PaymentElement
            options={{
              wallets: { applePay: "auto", googlePay: "auto" },
              fields: {
                billingDetails: {
                  name: "auto",
                },
              },
            }}
          />
        </div>
        <div className="grid p-4 bg-white border-4 border-gray-900">
          <span className="text-2xl pb-2">Dati di fatturazione</span>

          <AddressElement
            options={{
              mode: "billing",
              defaultValues: {
                firstName: user?.user_metadata?.firstName,
                lastName: user?.user_metadata?.lastName,
                address: user?.user_metadata?.address,
              },
              display: { name: "split" },
            }}
          />
        </div>

        <div className="my-4 border-t-4 border-gray-900 pt-6 sm:flex sm:items-center sm:justify-between">
          <Button
            className="w-full text-white bg-myGreen text-center"
            onClick={checkout}
            loading={loading}
            disabled={!stripe || !elements}
          >
            <div className="w-full">Vai al pagamento</div>
          </Button>
        </div>
        <FormMessage error={error} />
      </div>
    </div>
  );
};
