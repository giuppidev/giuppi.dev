import Link from "next/link";
import { Event } from "./event";

export default function Events({ events }: { events: any }) {
  return (
    <div className="bg-white border-b-4 border-b-gray-900 box-border lg:bg-[url('/map.svg')] bg-no-repeat bg-center">
      <div className="mx-auto  px-6 py-8 lg:px-8 ">
        <div className="mx-auto mb-8 max-w-7xl">
          <p className=" text-5xl font-semibold  tracking-tight text-gray-900 sm:text-5xl lg:text-center">
            Promisse tappe
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 mx-auto max-w-7xl ">
          {events.map((event: any, key: number) => (
            <Event event={event} key={event.id} />
          ))}
        </div>
        <div className="justify-center lg:justify-end  gap-2 flex mx-auto max-w-7xl pt-4">
          <Link href="/corsi" className="flex gap-4 items-center">
            <span className="hover:underline text-2xl font-semibold">
              Tutti i corsi
            </span>{" "}
            <LinkArrow />
          </Link>
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

const LinkArrow = () => (
  <svg
    width="47"
    height="42"
    viewBox="0 0 47 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="21" cy="21" r="21" fill="#FFCC33" />
    <circle cx="26" cy="21" r="21" fill="black" />
    <rect
      x="21.8621"
      y="6"
      width="19.994"
      height="8.29021"
      transform="rotate(45 21.8621 6)"
      fill="white"
    />
    <rect
      x="36"
      y="20.138"
      width="19.994"
      height="8.29021"
      transform="rotate(135 36 20.138)"
      fill="white"
    />
  </svg>
);
