import { Database } from "@/types/supabase";
import { createServerSupabaseClient } from "../../../supabase-server";
import CoursesList from "./courses";

type Course = Database["public"]["Tables"]["products"]["Row"];
export default async function Corsi() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();
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
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-7xl">
              I tuoi corsi e le masterclass
            </h2>
          </div>
        </div>
      </div>
      <CoursesList courses={courses} />
    </>
  );
}
