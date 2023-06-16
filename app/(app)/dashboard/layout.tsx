import { Database } from "@/types/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data: session } = await supabase.auth.getSession();

  const { data: user } = await supabase
    .from("profiles")
    .select()
    .eq("id", session.session?.user.id)
    .single();

  if (!session) {
    redirect("/");
  }

  return (
    <>
      <div className="grid  h-full">
        <main className="">{children}</main>
      </div>
    </>
  );
}
