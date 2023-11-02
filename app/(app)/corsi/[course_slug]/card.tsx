import { Button } from "@/components/button";
import { LinkButton } from "@/components/link";
import { Database } from "@/types/supabase";
import { handleSubscribe } from "../../actions";
import { CourseStatus } from "./page";

type Course = Database["public"]["Tables"]["products"]["Row"];

interface CourseProps {
  course: Course;
  courseState: CourseStatus;
}

const CourseCard = ({ course, courseState }: CourseProps) => {
  const linkLabel = "SINGOLO EVENTO - € " + course.price;

  return (
    <div
      className={` bg-white w-full lg:w-96  transition-all py-5 px-4 border-4 border-gray-900 shadow-brutal`}
    >
      <div className="flex flex-col h-full gap-4 items-center">
        <div className="relative bg-white  w-full  flex justify-center border-4 border-gray-900">
          <img
            src={course.cover_url || ""}
            alt={course.name || ""}
            className=" w-full  object-cover"
          />
        </div>

        <form action={handleSubscribe} className="pb-8">
          <input type="hidden" name="mode" value="monthly" />
          <Button
            type="submit"
            className="bg-red-600 text-white font-semibold text-xl mt-4 relative"
          >
            ACCEDI A TUTTO - € 25/mese
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CourseCard;
