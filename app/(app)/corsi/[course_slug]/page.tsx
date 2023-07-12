import { createServerSupabaseClient } from "@/app/supabase-server";
import CourseHero from "./hero";
import Sections from "./sections";
import InfoCard from "./info";
import { ResolvingMetadata } from "next";
export const revalidate = 600;

export async function generateMetadata(
  {
    params,
  }: {
    params: { course_slug: string };
  },
  parent: ResolvingMetadata
) {
  const supabase = createServerSupabaseClient();

  const { data: course } = await supabase
    .from("products")
    .select()
    .eq("slug", params.course_slug)
    .single();
  const previousImages = (await parent).openGraph?.images || [];
  const previousTitle = (await parent).title || "";

  return {
    title: course?.name,
    description: course?.short_description,
    cardImage: course?.cover_url,
    openGraph: {
      title: course?.name || previousTitle,
      description: course?.short_description,
      images: [course?.cover_url, ...previousImages],
    },
  };
}

export type CourseStatus = "inprogress" | "finished" | "new";

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

  let courseStatus: CourseStatus = "new";
  if (lessons) {
    const now = new Date();
    const hasFutureLessons = lessons.some((lesson) => {
      const lessonDate = new Date(lesson.event_timestamp || "");
      return lessonDate > now;
    });
    const hasPastLessons = lessons.some((lesson) => {
      const lessonDate = new Date(lesson.event_timestamp || "");
      return lessonDate < now;
    });
    if (hasFutureLessons && hasPastLessons) {
      courseStatus = "inprogress";
    } else if (!hasFutureLessons && hasPastLessons) {
      courseStatus = "finished";
    }
  }

  return (
    <>
      <CourseHero course={course} courseState={courseStatus} />
      <div className="flex flex-col lg:flex-row">
        <div></div>
      </div>
      <div className="py-8 w-screen ">
        <div className="flex flex-col-reverse lg:flex-row justify-between max-w-7xl px-6 lg:px-8 mx-auto">
          <Sections course={course} lessons={lessons || []} />
          <InfoCard course={course} courseState={courseStatus} />
        </div>
      </div>
    </>
  );
}
