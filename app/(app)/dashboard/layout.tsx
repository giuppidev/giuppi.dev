import { Database } from "@/types/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { PrivateMenu } from "./menu";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerComponentClient<Database>({ cookies });
  const headersList = headers();
  const path = headersList.get("x-url") || "";
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) {
    const redirectPath = path || "/dashboard/corsi";
    redirect(`/auth/sign-in?redirectTo=${redirectPath}`);
  }

  return (

      <div className="grid grid-rows-[auto_1fr]  h-full">
        <PrivateMenu />
        <main className="">{children}</main>
      </div>

  );
}
