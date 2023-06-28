import { Database } from "@/types/supabase";
import { createServerSupabaseClient } from "../../../supabase-server";
import CoursesList from "./courses";
import { notFound, redirect } from "next/navigation";
import { LinkButton } from "@/components/link";

type Course = Database["public"]["Tables"]["products"]["Row"];
export default async function Corsi() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/auth/sign-in?redirectTo=/dashboard/corsi");
  }

  const customerPortal = process.env.NEXT_PUBLIC_STRIPE_CUSTOMER_PORTAL || "";

  const { data: products } = await supabase
    .from("orders")
    .select("products(*)")
    .eq("user_id", session?.user.id)
    .eq("payment_status", "succeeded");

  const courses =
    (products?.map((p) => p.products).filter((p) => p !== null) as Course[]) ||
    [];

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
                className="bg-myGreen text-white"
                target="_blank"
              >
                Gestisci il tuo abbonamento
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
      <CoursesList courses={courses} />
    </>
  );
}
