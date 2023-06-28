import { useSupabase } from "@/app/supabase-provider";
import { Button } from "@/components/button";
import { LinkButton } from "@/components/link";
import { Database } from "@/types/supabase";
import { Dialog, Transition } from "@headlessui/react";
import { PlayIcon } from "@heroicons/react/24/solid";
import { Fragment, useState } from "react";
import { handleSubscribe } from "../../actions";

type Course = Database["public"]["Tables"]["products"]["Row"];

interface CourseProps {
  course: Course;
  alreadyOrdered: boolean;
}

const CourseCard = ({ course, alreadyOrdered }: CourseProps) => {
  const linkLabel = "SINGOLO EVENTO - € " + course.price;

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
        {/* {course.discount ? (
          <div className=" text-3xl mb-3 font-semibold mt-2 flex justify-center items-center gap-1">
            <div className="font-extrabold text-4xl">€ {course.price}</div>
            <div className="text-gray-600 text-lg line-through ">€ 199</div>
            <div className="font-extrabold text-lg text-white bg-red-600  border-2 border-gray-900 px-1">
              -{course.discount}%
            </div>
          </div>
        ) : (
          <div className=" text-3xl mb-3 font-semibold mt-2 flex justify-center">
            <div className="font-extrabold font-4xl">€ {course.price}</div>
          </div>
        )} */}

        {alreadyOrdered ? (
          <LinkButton
            className="bg-myGreen text-white font-semibold"
            href={`/dashboard/corsi`}
          >
            Vai al corso
          </LinkButton>
        ) : (
          <div className="flex flex-col gap-2 items-center">
            <form action={handleSubscribe}>
              <input type="hidden" name="mode" value="yearly" />
              <Button
                type="submit"
                className="bg-red-600 text-white font-semibold text-xl mt-4"
              >
                ACCEDI A TUTTO - € 25/m
              </Button>
            </form>
            <div>oppure</div>
            <LinkButton
              className="bg-myGreen text-white font-semibold text-xl"
              href={course.eventbrite_url || ""}
              target="_blank"
            >
              {linkLabel}
            </LinkButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
