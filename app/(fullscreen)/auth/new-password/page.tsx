"use client";

import { useSupabase } from "@/app/supabase-provider";
import AuthForm from "@/components/auth-form";
import { AuthLink, FormMessage, PasswordInput } from "@/components/auth/form";
import { Button } from "@/components/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

export type Inputs = {
  password: string;
};
export default function Login() {
  const { supabase } = useSupabase();
  const methods = useForm<Inputs>();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const onSubmit: SubmitHandler<Inputs> = async ({ password }) => {
    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password });
    if (!error) {
      router.push("/");
    } else {
      setError("Link non valido, manda una nuova mail.");
      setLoading(false);
    }
  };

  return (
    <AuthForm label="Nuova password">
      <FormProvider {...methods}>
        <form
          className="space-y-4 md:space-y-6"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <PasswordInput label="Nuova password" />

          <div className="w-full flex justify-center">
            <Button
              type="submit"
              className="bg-myGreen text-white"
              loading={loading}
            >
              IMPOSTA PASSWORD
            </Button>
          </div>
          <AuthLink loginLink passwordLink />
        </form>
        <FormMessage error={error} />
      </FormProvider>
    </AuthForm>
  );
}
