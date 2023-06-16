import SupabaseProvider from "@/app/supabase-provider";
import { Logo } from "@/components/layout/logo";
import React from "react";

export default function AuthForm({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <SupabaseProvider>
      <section className="bg-myYellow dark:bg-gray-900 absolute top-0 left-0 h-screen w-full">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="/"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <Logo className="w-96" />
          </a>
          <div className="w-full bg-white shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 border-4 border-gray-900">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                {label}
              </h1>
              {children}
            </div>
          </div>
        </div>
      </section>
    </SupabaseProvider>
  );
}
