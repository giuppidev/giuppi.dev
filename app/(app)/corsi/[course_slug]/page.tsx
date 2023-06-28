import { createServerSupabaseClient } from "@/app/supabase-server";
import CourseHero from "./hero";
import Sections from "./sections";
import InfoCard from "./info";

export default async function CoursePage({
  params,
}: {
  params: { course_slug: string };
}) {
  const supabase = createServerSupabaseClient();
  const { data: course } = await supabase
    .from("products")
    .select()
    .eq("slug", params.course_slug)
    .single();

  if (!course) {
    return <div>Course not found</div>;
  }

  const { data: lessons } = await supabase
    .from("lessons")
    .select()
    .eq("product_id", course.id)
    .order("event_timestamp", { ascending: true });

  const {
    data: { user },
  } = await supabase.auth.getUser();
  let alreadyOrdered = false;
  if (user) {
    const { error, data: order } = await supabase
      .from("orders")
      .select()
      .eq("product_id", course.id)
      .eq("user_id", user.id)
      .eq("payment_status", "succeeded")
      .single();

    if (order) {
      alreadyOrdered = true;
    }
  }

  return (
    <>
      <CourseHero course={course} alreadyOrdered={alreadyOrdered} />
      <div className="flex flex-col lg:flex-row">
        <div></div>
      </div>
      <div className="py-8 w-screen ">
        <div className="flex flex-col-reverse lg:flex-row justify-between max-w-7xl px-6 lg:px-8 mx-auto">
          <Sections course={course} lessons={lessons || []} />
          <InfoCard course={course} />
        </div>
      </div>
    </>
  );
}
