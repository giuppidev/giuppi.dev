import { createServerSupabaseClient } from "@/app/supabase-server";
import { Event } from "./components/event";
import CalendarHero from "./components/hero";
import Table from "./components/table";

export default async function Calendario() {
  const supabase = createServerSupabaseClient();
  const now = new Date("12/01/2023").toISOString();

  const { data } = await supabase
    .from("lessons")
    .select(`*, products(*)`)
    .gte("event_timestamp", now)
    .order("event_timestamp");

  return (
    <>
      <CalendarHero />
      <div className="border-b-4 border-gray-900 py-2 bg-white">
        <div className="mx-auto mb-8 max-w-7xl">
          <p className=" text-3xl font-semibold p-2  tracking-tight text-gray-900 sm:text-3xl lg:text-center">
            Le prossime lezioni
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mx-auto">
            {data &&
              data
                .slice(0, 4)
                .map((event: any) => <Event event={event} key={event.id} />)}
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="py-8 w-screen bg-white lg:mx-auto mb-8 lg:max-w-7xl ">
          <p className=" text-5xl font-semibold pb-8  tracking-tight text-gray-900 sm:text-5xl lg:text-center">
            Calendario 2023 / 2024
          </p>
          <div className="flex  max-w-5xlv xwlg:px-8 lg:mx-auto bg-white">
            <Table events={data} />
          </div>
        </div>
      </div>
    </>
  );
}
