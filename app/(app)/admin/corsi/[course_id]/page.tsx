import { Database } from "@/types/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Lessons from "./lessons/lessons";
import { SendNotification } from "./send";

export default async function ViewCourse({
  params,
}: {
  params: { course_id: string };
}) {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data: course } = await supabase
    .from("products")
    .select()
    .eq("id", params.course_id)
    .single();

  const { data: lessons } = await supabase
    .from("lessons")
    .select()
    .eq("product_id", params.course_id);

  if (!course) {
    return <div>Course not found</div>;
  }
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Corso {course.name}
          </h1>
          <p className="mt-2 text-sm text-gray-700">{course.description}</p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <a
            href={`/admin/corsi/${params.course_id}/edit`}
            className="block rounded-md bg-myGreen px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-lime-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Aggiorna corso
          </a>
        </div>
      </div>

      <SendNotification course_id={course.id} />

      <Lessons course_id={params.course_id} lessons={lessons} />
    </div>
  );
}
