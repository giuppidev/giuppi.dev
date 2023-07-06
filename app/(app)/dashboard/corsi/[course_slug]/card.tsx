import { Button } from "@/components/button";
import { LinkButton } from "@/components/link";
import { Database } from "@/types/supabase";

type Course = Database["public"]["Tables"]["products"]["Row"];

interface CourseProps {
  course: Course;
}

const CourseCard = ({ course }: CourseProps) => {
  return (
    <div
      className={` bg-white w-full lg:w-96  transition-all py-5 px-4 border-4 border-gray-900 shadow-brutal`}
    >
      <div className="flex flex-col h-full gap-4">
        <div className="relative bg-white  w-full  flex justify-center border-4 border-gray-900">
          <img
            src={course.cover_url || ""}
            alt={course.name || ""}
            className=" w-full  object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
