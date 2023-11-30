"use client";
import { useState } from "react";
import { Event } from "./event";

const FIRST_PAGE = 0;
const LAST_PAGE = 4;
const EVENTS_PER_PAGE = 4;

export default function Events({ events }: { events: any }) {
  const [page, setPage] = useState(FIRST_PAGE);

  const paginate = (value: number) => {
    setPage((prev) => {
      const newPage = prev + value;
      if (newPage < FIRST_PAGE || newPage > LAST_PAGE) {
        return prev;
      }
      return newPage;
    });
  };

  const paginatedEvents = events.slice(page, page + EVENTS_PER_PAGE);

  return (
    <div className="bg-white border-b-4 border-b-gray-900 box-border ">
      <div className="mx-auto  px-6 py-8 lg:px-8 ">
        <div className="mx-auto mb-8 max-w-7xl">
          <p className=" text-5xl font-semibold  tracking-tight text-gray-900 sm:text-5xl lg:text-center">
            Le mie prossime lezioni
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mx-auto lg:mx-32">
          {paginatedEvents.map((event: any) => (
            <Event event={event} key={event.id} />
          ))}
        </div>
        <div className="justify-end hidden gap-2 md:flex mx-auto lg:mx-32">
          <button
            onClick={() => paginate(-1)}
            className={`${
              page === 0 ? "text-gray-300 cursor-default" : "text-gray-900"
            }`}
          >
            <LeftArrow />
          </button>
          <button
            onClick={() => paginate(+1)}
            className={`${
              page === LAST_PAGE
                ? "text-gray-300 cursor-default"
                : "text-gray-900"
            }`}
          >
            <RightArrow />
          </button>
        </div>
      </div>
    </div>
  );
}

const RightArrow = () => (
  <svg
    width="64px"
    height="64px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.0681 11.9928L18.8183 7.75732L17.4065 9.17392L19.2419 11.0031L0.932836 11.0011L0.932617 13.0011L19.2373 13.0031L17.4158 14.8308L18.8324 16.2426L23.0681 11.9928Z"
      fill="currentColor"
    />
  </svg>
);

const LeftArrow = () => (
  <svg
    width="64px"
    height="64px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.02686 11.9928L5.2623 16.2426L6.67889 14.8308L4.85754 13.0032L22.9729 13.0011L22.9727 11.0011L4.85297 11.0032L6.68848 9.17392L5.27665 7.75732L1.02686 11.9928Z"
      fill="currentColor"
    />
  </svg>
);
