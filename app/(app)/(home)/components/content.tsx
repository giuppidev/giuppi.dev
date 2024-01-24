import { Database } from "@/types/supabase";
import CourseRow from "./course-row";

type Course = Database["public"]["Tables"]["products"]["Row"];

export default function Content({ courses }: { courses: Course[] }) {
  const courseList =
    courses?.filter((course) => {
      return course.product_type === "course";
    }) || [];

  const masterclassList =
    courses?.filter((course, k) => {
      return (
        course.product_type === "masterclass" && [2, 3, 4, 7, 8].includes(k)
      );
    }) || [];
  return (
    <div className="border-b-4 border-gray-900  bg-white" id="corsi">
      <div className="mx-auto max-w-4xl lg:text-center py-12 px-6">
        <p className=" text-5xl font-semibold  tracking-tight text-gray-900 sm:text-7xl">
          Corsi e masterclass
        </p>
        <p className="mt-4 text-xl leading-8 text-gray-800">
          Entrando nella community avrai{" "}
          <span className="font-semibold">subito accesso completo</span> a tutti
          i corsi già pubblicati. Ogni settimana{" "}
          <span className="font-semibold">
            una nuova lezione o una nuova masterclass
          </span>
          , che decideremo insieme mese per mese.
        </p>
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-16">
          <div>
            <div className="font-semibold text-5xl">I corsi</div>
            <ul
              role="list"
              className="mt-2 grid max-w-2xl grid-cols-1  lg:mx-0 lg:max-w-none  
          "
            >
              {courseList.map((course, key) => (
                <CourseRow course={course} key={key} />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl mt-8 px-6">
        <div className="flex flex-col gap-16">
          <div>
            <div className="font-semibold text-5xl">Le masterclass</div>
            <ul
              role="list"
              className="mt-2 grid max-w-2xl grid-cols-1  lg:mx-0 lg:max-w-none  
          "
            >
              {masterclassList.map((course, key) => (
                <CourseRow course={course} key={key} />
              ))}
            </ul>
            <p className="text-2xl pb-8">...e molte altre!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    name: "Metodo di studio",
    arrowColor: "#07B6D4",
  },
  {
    name: "Senior dev",
    arrowColor: "#FFCC00",
  },
  {
    name: "Aggiornamento continuo",
    arrowColor: "#FFCC00",
  },
  {
    name: "Progetto reale",
    arrowColor: "#FFCC00",
  },
];

const Arrow = (props: any) => (
  <svg
    width="25"
    height="35"
    viewBox="0 0 25 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="7.2561"
      width="24.7487"
      height="10.2617"
      transform="rotate(45 7.2561 0)"
      fill="currentColor"
    />
    <rect
      x="24.7561"
      y="17.5"
      width="24.7487"
      height="10.2617"
      transform="rotate(135 24.7561 17.5)"
      fill="currentColor"
    />
  </svg>
);
