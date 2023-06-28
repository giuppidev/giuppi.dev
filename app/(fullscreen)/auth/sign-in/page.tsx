"use client";
import { useSupabase } from "@/app/supabase-provider";
import AuthForm from "@/components/auth-form";
import {
  AuthLink,
  EmailInput,
  FormMessage,
  PasswordInput,
} from "@/components/auth/form";
import { Button } from "@/components/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

export type Inputs = {
  email: string;
  password: string;
};

export default function Login({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const redirectTo = searchParams.redirectTo as string;
  const router = useRouter();
  const methods = useForm<Inputs>();
  const { supabase } = useSupabase();

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (!error) {
      setError("");
      router.push(redirectTo ?? "/dashboard/corsi");
    } else {
      console.log(error.message);
      if (error.message === "Invalid login credentials") {
        setError("Credenziali non valide");
      } else if (error.message === "Email not confirmed") {
        setError("Abilita il tuo account con la mail ricevuta");
      } else {
        setError("Errore in fase di login");
      }
      setLoading(false);
    }
  };

  return (
    <AuthForm label="Login">
      <FormProvider {...methods}>
        <form
          className="space-y-4 md:space-y-6"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <EmailInput />
          <PasswordInput />
          <div className="w-full flex justify-center">
            <Button
              type="submit"
              className="bg-myGreen text-white"
              loading={loading}
            >
              LOGIN
            </Button>
          </div>
          <AuthLink passwordLink signupLink />
        </form>
        <FormMessage error={error} />
      </FormProvider>
    </AuthForm>
  );
}
