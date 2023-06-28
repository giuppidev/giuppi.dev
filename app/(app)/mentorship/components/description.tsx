import { Database } from "@/types/supabase";
import dynamic from "next/dynamic";

type Course = Database["public"]["Tables"]["products"]["Row"];
export default function CourseDescription({ course }: { course: Course }) {
  const Description = dynamic(() => import(`./mdx/${course.id}/content.mdx`), {
    loading: () => <p></p>,
  });

  return (
    <div>
      <div className="transition-opacity">
        <Description />
      </div>
    </div>
  );
}
