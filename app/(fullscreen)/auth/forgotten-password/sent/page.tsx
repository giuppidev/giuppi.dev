"use client";
import AuthForm from "@/components/auth-form";
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
