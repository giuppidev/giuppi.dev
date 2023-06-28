"use client";

import { useSupabase } from "@/app/supabase-provider";
import AuthForm from "@/components/auth-form";
import { AuthLink, PasswordInput } from "@/components/auth/form";
import { Button } from "@/components/button";
import { retrieveAndSetStripeCustomer } from "@/utils/supabase-admin";
import { useRouter } from "next/navigation";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

export type Inputs = {
  password: string;
};
export default function NewUser() {
  const { supabase } = useSupabase();
  const methods = useForm<Inputs>();
  const router = useRouter();
  const onSubmit: SubmitHandler<Inputs> = async ({ password }) => {
    const {
      error,
      data: { user },
    } = await supabase.auth.updateUser({ password });
    if (!error && user) {
      await supabase.auth.signInWithPassword({ email: user.email!, password });
      router.push("/");
    }
  };

  return (
    <AuthForm label="Completa registrazione">
      <FormProvider {...methods}>
        <form
          className="space-y-4 md:space-y-6"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <PasswordInput label="Nuova password" />

          <div className="w-full flex justify-center">
            <Button type="submit" className="bg-myGreen text-white">
              IMPOSTA PASSWORD
            </Button>
          </div>
          <AuthLink loginLink />
        </form>
      </FormProvider>
    </AuthForm>
  );
}
