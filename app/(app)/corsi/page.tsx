import CoursesList, { CourseType } from "@/components/courses";
import { createServerSupabaseClient } from "../../supabase-server";

export default async function Corsi({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const supabase = createServerSupabaseClient();
  const { data: courses } = await supabase
    .from("products")
    .select()
    .or("product_type.eq.course,product_type.eq.masterclass")
    .order("start_date");

  const type = searchParams["type"] as CourseType | undefined;
  return (
    <>
      <div className="bg-myYellow border-b-4 border-b-gray-900 ">
        <div className="pt-16 pb-16 mx-auto max-w-7xl px-6 lg:px-8 ">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-5xl font-semibold lg:font-medium  tracking-tight text-gray-900 sm:text-8xl">
              Tutti i corsi e le masterclass
            </h2>
          </div>
        </div>
      </div>
      <CoursesList courses={courses} type={type} />
    </>
  );
}
