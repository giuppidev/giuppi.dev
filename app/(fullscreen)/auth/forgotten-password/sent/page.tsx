import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

import type { Database } from "@/types/supabase";
import { Logo } from "@/components/layout/logo";
import { Input } from "@/components/input";
import AuthForm from "@/components/auth-form";
import { Button } from "@/components/button";
import { getURL } from "@/utils/helpers";
import { AuthLink } from "@/components/auth/form";

export default async function Sent() {
  return (
    <AuthForm label="Mail inviata!">
      <form className="space-y-4 md:space-y-6">
        <p>Controlla la tua casella email.</p>
        <AuthLink loginLink />
      </form>
    </AuthForm>
  );
}
