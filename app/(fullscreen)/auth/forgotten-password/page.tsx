"use client";
import { useSupabase } from "@/app/supabase-provider";
import AuthForm from "@/components/auth-form";
import { AuthLink, EmailInput, FormMessage } from "@/components/auth/form";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { getURL } from "@/utils/helpers";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

export type Inputs = {
  email: string;
};
export default function ChangePassword() {
  const { supabase } = useSupabase();
  const methods = useForm<Inputs>();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const onSubmit: SubmitHandler<Inputs> = async ({ email }) => {
    setLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${getURL()}auth/new-password`,
    });
    if (!error) {
      router.push("/auth/forgotten-password/sent");
    } else {
      setError(error.message);
    }
    setLoading(false);
  };

  return (
    <AuthForm label="Password dimenticata">
      <FormProvider {...methods}>
        <form
          className="space-y-4 md:space-y-6"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <EmailInput />

          <div className="w-full flex justify-center">
            <Button
              type="submit"
              className="bg-myGreen text-white"
              loading={loading}
            >
              Invia mail con istruzioni
            </Button>
          </div>
          <AuthLink loginLink />
        </form>
        <FormMessage error={error} />
      </FormProvider>
    </AuthForm>
  );
}
