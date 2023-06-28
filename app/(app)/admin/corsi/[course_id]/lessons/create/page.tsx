import { Database } from "@/types/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function CreateForm({
  params,
}: {
  params: { course_id: string };
}) {
  const createLesson = async (formData: FormData) => {
    "use server";
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const date = formData.get("date") as string;

    const supabase = createServerComponentClient<Database>({ cookies });

    const { error, data } = await supabase.from("lessons").insert({
      name,
      description,
      product_id: params.course_id as unknown as number,
      event_timestamp: new Date(date).toISOString(),
    });
    if (error) {
      console.log(error);
    } else {
      redirect(`admin/corsi/${params.course_id}`);
    }
  };
  return (
    <form action={createLesson}>
      <div className="mt-2 flex flex-col gap-2">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Nome
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="nome"
              required
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Descrizione
          </label>
          <div className="mt-2">
            <textarea
              name="description"
              id="description"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="descrizione"
              rows={2}
            />
          </div>
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              date
            </label>
            <div className="mt-2">
              <input
                name="date"
                id="date"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="date"
                type="datetime-local"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex gap-3 justify-end">
        <a
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          href={`/admin/corsi/${params.course_id}`}
        >
          Cancel
        </a>
        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
        >
          Crea
        </button>
      </div>
    </form>
  );
}
