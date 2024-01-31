import SupabaseProvider from "@/app/supabase-provider";
import { GiuppiLogo, Logo } from "@/components/layout/logo";
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
      <section className="bg-myYellow  absolute top-0 left-0 min-h-screen w-full">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:min-h-screen lg:py-0">
          <a
            href="/"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 "
          >
            <GiuppiLogo className="w-96" />
          </a>
          <div className="w-full bg-white shadow md:mt-0 sm:max-w-md xl:p-0 border-4 border-gray-900">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
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
