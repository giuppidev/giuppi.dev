import { createServerSupabaseClient } from "@/app/supabase-server";
import CourseHero from "./hero";
import Sections from "./sections";
import InfoCard from "./info";
import { ResolvingMetadata } from "next";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
export const revalidate = 600;

export async function generateMetadata(
  {
    params,
  }: {
    params: { course_slug: string };
  },
  parent: ResolvingMetadata
) {
  const supabase = await createServerSupabaseClient();

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

export default async function CoursePage({
  params,
}: {
  params: { course_slug: string };
}) {
  const supabase = createServerSupabaseClient();
  const headersList = headers();
  const path = headersList.get("next-url") || "";
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    const redirectPath = path || "/dashboard/corsi";
    redirect(`/auth/sign-in?redirectTo=${redirectPath}`);
  }

  const { data: sub } = await supabase
    .from("subscriptions")
    .select()
    .eq("email", session.user.email)
    .eq("active", true)
    .single();

  if (!sub) {
    const redirectPath = path || "/dashboard/corsi";
    redirect(`/auth/sign-in?redirectTo=${redirectPath}`);
  }

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

  return (
    <>
      <CourseHero course={course} />
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
