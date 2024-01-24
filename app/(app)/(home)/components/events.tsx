import { Event } from "./event";

export default function Events({ events }: { events: any }) {
  return (
    <div className="bg-white box-border bg-[url('/map-vertical.svg')] md:bg-none lg:bg-[url('/map.svg')] bg-no-repeat bg-center">
      <div className="mx-auto  px-6 py-8 lg:px-8 ">
        <div className="mx-auto mb-16 max-w-7xl">
          <p className=" text-5xl font-semibold  tracking-tight text-gray-900 sm:text-5xl lg:text-left">
            Prossime tappe
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto max-w-7xl lg:[&>*:nth-child(even)]:-mt-8 ">
          {events?.map((event: any) => (
            <Event event={event} key={event.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
