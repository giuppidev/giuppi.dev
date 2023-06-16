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
  first_name: string;
  last_name: string;
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
    first_name,
    last_name,
  }) => {
    setLoading(true);
    if (password !== confirmPassword) {
      methods.setError("confirmPassword", {
        message: "Le due password non coincidono.",
      });
    } else {
      const verificationTime = new Date().toISOString();

      // const { error, data: newUser } = await supabase.auth.signUp({
      //   email,
      //   password,
      //   options: {
      //     emailRedirectTo: `${getURL()}auth/callback`,
      //     data: {
      //       first_name,
      //       last_name,
      //     },
      //   },
      // });

      const res = await fetch("/api/sign-up", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
          first_name,
          last_name,
        }),
      });
      console.log(res);
      if (!res.ok) {
        setError("Errore in fase di registrazione.");
      } else {
        router.push("/auth/sign-up/sent");
      }
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
          <Input label="Nome" name="first_name" placeholder="Nome" />
          <Input label="Cognome" name="last_name" placeholder="Cognome" />
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
                I accept the{" "}
                <a
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  href="#"
                >
                  Terms and Conditions
                </a>
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
