"use client";
import { useSupabase } from "@/app/supabase-provider";
import { Button } from "@/components/button";
import { LinkButton } from "@/components/link";
import { Database } from "@/types/supabase";
import { Dialog, Transition } from "@headlessui/react";
import { PlayIcon } from "@heroicons/react/24/solid";
import { Fragment, useState } from "react";

type Course = Database["public"]["Tables"]["products"]["Row"];

interface InfoProps {
  course: Course;
}

const InfoCard = ({ course }: InfoProps) => {
  return (
    <div
      className={` bg-white w-full lg:w-96 h-fit   transition-all p-5 border-4 border-gray-900 shadow-brutal mb-8`}
    >
      <h1 className="font-semibold text-5xl pb-4">Overview</h1>
      <div className="flex flex-col h-full gap-2">
        <div>
          <div className=" text-lg">insegnante</div>
          <div className="flex gap-2 items-center">
            <div className="text-3xl font-semibold">Giuseppe Funicello</div>
          </div>
        </div>
        <div>
          <div className=" text-lg">livello</div>
          <div className="flex gap-2 items-center">
            <div className="text-3xl font-semibold capitalize">
              {course.level}
            </div>
          </div>
        </div>
        <div>
          <div className=" text-lg">durata</div>
          <div className="flex gap-2 items-center">
            <div className="text-3xl font-semibold">7 lezioni</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;

/* <img
              src="/images/teacher.jpg"
              alt=""
              className="w-16 h-16 rounded-2xl border-2 border-gray-900  shadow-brutal"
            /> */
