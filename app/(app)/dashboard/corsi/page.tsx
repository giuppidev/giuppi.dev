import { LinkButton } from "@/components/link";
import { Database } from "@/types/supabase";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { createServerSupabaseClient } from "../../../supabase-server";
import CoursesList from "./courses";

type Course = Database["public"]["Tables"]["products"]["Row"];
export default async function Corsi() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const headersList = headers();
  const path = headersList.get("x-url") || "";
  if (!session) {
    const redirectPath = path || "/dashboard/corsi";
    redirect(`/auth/sign-in?redirectTo=${redirectPath}`);
  }

  const customerPortal = process.env.NEXT_PUBLIC_STRIPE_CUSTOMER_PORTAL || "";

  const { data: sub } = await supabase
    .from("subscriptions")
    .select()
    .eq("email", session.user.email)
    .eq("active", true)
    .single();

  const { data } = await supabase
    .from("products")
    .select()
    .eq("published", true)
    .order("start_date");

  return (
    <>
      <div className="bg-myYellow border-b-4 border-b-gray-900 ">
        <div className="pt-16 pb-16 mx-auto max-w-7xl px-6 lg:px-8 ">
          <div className="mx-auto max-w-2xl lg:mx-0 flex flex-col gap-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-7xl">
              I tuoi corsi e le masterclass
            </h2>
            <div>
              <LinkButton
                href={customerPortal}
                className="bg-myGreen text-white text-base lg:text-xl"
                target="_blank"
              >
                Gestisci il tuo abbonamento
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
      <CoursesList courses={data as Course[]} />
    </>
  );
}
