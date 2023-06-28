"use client";

import { useSupabase } from "@/app/supabase-provider";
import AuthForm from "@/components/auth-form";
import { FormMessage } from "@/components/auth/form";
import { AuthLink, EmailInput, PasswordInput } from "@/components/auth/form";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { getURL } from "@/utils/helpers";
import { getStripe } from "@/utils/stripe-client";
import { retrieveAndSetStripeCustomer } from "@/utils/supabase-admin";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

export type Inputs = {
  password: string;
  confirmPassword: string;
  email: string;
};

export default function Signup() {
  const methods = useForm<Inputs>();
  const { supabase } = useSupabase();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async ({
    email,
    password,
    confirmPassword,
  }) => {
    setLoading(true);
    if (password !== confirmPassword) {
      methods.setError("confirmPassword", {
        message: "Le due password non coincidono.",
      });
      return;
    }
    const res = await fetch("/api/sign-up", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (!res.ok) {
      setError("Errore in fase di registrazione.");
    } else {
      const { error, data } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      router.push("/");
    }

    setLoading(false);
  };

  return (
    <AuthForm label="Registrati">
      <FormProvider {...methods}>
        <form
          className="space-y-4 md:space-y-6"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <EmailInput />
          <PasswordInput />
          <PasswordInput name="confirmPassword" label="Conferma password" />

          <div className="w-full flex justify-center">
            <Button
              type="submit"
              className="bg-myGreen text-white"
              loading={loading}
            >
              Registrati
            </Button>
          </div>

          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms"
                aria-describedby="terms"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                required
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="terms"
                className="font-light text-gray-500 dark:text-gray-300"
              >
                Accetto i
                <a
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  href="/terms"
                >
                  termini e le condizioni
                </a>{" "}
                del sito.
              </label>
            </div>
          </div>

          <AuthLink loginLink />
        </form>
        <FormMessage error={error} />
      </FormProvider>
    </AuthForm>
  );
}
