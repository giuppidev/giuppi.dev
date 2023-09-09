import { Database } from "@/types/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AdminNavbar from "./admin_nav";

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

  if (!session || !user?.is_admin) {
    redirect("/");
  }

  return (
    <>
      <div className="grid grid-cols-[auto_1fr] h-full">
        {/* Static sidebar for desktop */}
        <div className="w-20  flex lg:w-72 lg:flex-col ">
          <AdminNavbar />
        </div>

        <main className="py-10 max-w-7xl">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </>
  );
}
