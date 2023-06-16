"use client";
import { useSupabase } from "@/app/supabase-provider";
import { EmailInput, FormMessage, PasswordInput } from "@/components/auth/form";
import { Button, Spinner } from "@/components/button";
import { Input } from "@/components/input";
import {
  AddressElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useState, useTransition } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import {
  createIntent,
  createNewUser,
  createOrRetrieveCustomer,
  createOrder,
} from "../actions";
import { getURL } from "@/utils/helpers";

type Inputs = {
  password: string;
  confirmPassword: string;
  email: string;
  firstName: string;
  lastName: string;
};

interface SignupFormProps {
  goToLogin: () => void;
  productId: number;
  productPrice: number;
}
export const SignupForm = ({
  goToLogin,
  productId,
  productPrice,
}: SignupFormProps) => {
  const methods = useForm<Inputs>();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { supabase } = useSupabase();

  let [isPending, startTransition] = useTransition();
  const stripe = useStripe();
  const elements = useElements();
  const onSubmit: SubmitHandler<Inputs> = async ({
    email,
    password,
    confirmPassword,
    firstName,
    lastName,
  }) => {
    setLoading(true);

    if (password !== confirmPassword) {
      methods.setError("confirmPassword", {
        message: "Le due password non coincidono.",
      });
    }
    startTransition(async () => {
      if (!stripe || !elements) {
        setLoading(false);

        return;
      }
      const { error: submitError } = await elements.submit();
      if (submitError) {
        setError("ERRORE");
        setLoading(false);
        return;
      }
      const billing = (await elements?.getElement("address")?.getValue())
        ?.value;

      const { error: signinError, userId } = await createNewUser({
        email,
        password,
        firstName: billing?.firstName || "",
        lastName: billing?.lastName || "",
        address: billing?.address,
      });

      if (signinError) {
        setError(signinError);
        setLoading(false);
        return;
      }
      console.log("userId");

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
          email: email,
          uuid: userId || "",
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
        userId: userId || "",
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
    <FormProvider {...methods}>
      <form
        className="px-4 pb-36 pt-16 sm:px-6 lg:col-start-1 lg:row-start-1 lg:px-0 lg:pb-16"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <div className="mx-auto max-w-lg lg:max-w-none">
          <section aria-labelledby="contact-info-heading">
            <h2
              id="contact-info-heading"
              className="text-3xl font-medium text-gray-900 mb-8"
            >
              Registrati per completare l&apos;ordine
            </h2>

            <div className="flex flex-col gap-4">
              <div className="grid p-4 bg-white border-4 border-gray-900">
                <span className="text-2xl pb-2">Crea un account</span>
                <EmailInput />
                <div className="grid grid-cols-2 gap-4">
                  <PasswordInput />
                  <PasswordInput
                    name="confirmPassword"
                    label="Conferma password"
                  />
                </div>
                <p className="text-base text-gray-900 dark:text-gray-400 mt-10 mb-2">
                  Già registrato?{" "}
                  <button
                    onClick={goToLogin}
                    className="font-medium text-primary-600 hover:underline "
                  >
                    Effettua il login
                  </button>
                </p>
              </div>

              <div className="grid p-4 bg-white border-4 border-gray-900">
                <span className="text-2xl pb-2">Dati di pagamento</span>

                <PaymentElement />
              </div>
              <div className="grid p-4 bg-white border-4 border-gray-900">
                <span className="text-2xl pb-2">Dati di fatturazione</span>

                <AddressElement
                  options={{
                    mode: "billing",
                    display: { name: "split" },
                  }}
                />
              </div>
            </div>
          </section>
          <div className="my-8 border-t-4 border-gray-900 pt-6 sm:flex sm:items-center sm:justify-between">
            <Button
              className="w-full text-white bg-myGreen text-center"
              type="submit"
              loading={loading}
            >
              <div className="w-full">Compra adesso</div>
            </Button>
          </div>
          <FormMessage error={error} />
        </div>
      </form>
    </FormProvider>
  );
};
