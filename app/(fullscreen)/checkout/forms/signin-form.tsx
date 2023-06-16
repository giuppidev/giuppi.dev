"use client";
import { useSupabase } from "@/app/supabase-provider";
import { EmailInput, FormMessage, PasswordInput } from "@/components/auth/form";
import { Button, Spinner } from "@/components/button";
import { Input } from "@/components/input";
import { useState, useTransition } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import {
  createIntent,
  createOrRetrieveCustomer,
  createOrder,
} from "../actions";
import { getStripe } from "@/utils/stripe-client";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { getURL } from "@/utils/helpers";
import { useRouter } from "next/navigation";

interface Inputs {
  email: string;
  password: string;
}

interface SigninFormProps {
  goToSignup: () => void;
  goToSignedIn: () => void;
  productId: number;
  productStripeProductId: string;
  productPrice: number;
}
export const SigninForm = ({
  goToSignup,
  goToSignedIn,
  productId,
  productStripeProductId,
  productPrice,
}: SigninFormProps) => {
  const methods = useForm<Inputs>();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState("");
  const { supabase } = useSupabase();
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    setLoading(true);
    startTransition(async () => {
      if (!stripe || !elements) {
        return;
      }

      const {
        error: signinError,
        data: { user },
      } = await supabase.auth.signInWithPassword({
        email,
        password,
        options: {},
      });

      if (signinError) {
        setError(getSigninError(signinError.message));
        setLoading(false);
        return;
      }

      goToSignedIn();
      return;
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
              className="text-3xl font-medium text-gray-900 pb-4"
            >
              Loggati per completare l'ordine
            </h2>
            <div className="grid p-4 bg-white border-4 border-gray-900">
              <EmailInput />
              <PasswordInput />
              <p className="text-base text-gray-900 dark:text-gray-400 mt-10 mb-2">
                Nuovo?{" "}
                <button
                  onClick={goToSignup}
                  className="font-medium text-primary-600 hover:underline "
                >
                  Registrati
                </button>
              </p>{" "}
            </div>
          </section>

          <div className="my-8 border-t-4 border-gray-900 pt-6 sm:flex sm:items-center sm:justify-between">
            <Button
              className="w-full text-white bg-myGreen text-center"
              type="submit"
              loading={loading}
            >
              <div className="w-full">Login</div>
            </Button>
          </div>
          <FormMessage error={error} />
        </div>
      </form>
    </FormProvider>
  );
};

function getSigninError(error: string) {
  if (error === "Invalid login credentials") {
    return "Credenziali non valide";
  } else if (error === "Email not confirmed") {
    return "Abilita il tuo account con la mail ricevuta";
  }
  return "Errore in fase di login";
}
