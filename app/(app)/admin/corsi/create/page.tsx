import { Database } from "@/types/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import slugify from "slugify";

export default function CreateForm() {
  const createCourse = async (formData: FormData) => {
    "use server";
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const price = parseFloat(formData.get("price") as string);
    const eventbrite_url = formData.get("eventbrite_url") as string;
    const video_url = formData.get("video_url") as string;
    const level = formData.get("level") as string;
    const supabase = createServerComponentClient<Database>({ cookies });
    const slug = slugify(name, { lower: true });
    const { error, data: newProduct } = await supabase
      .from("products")
      .insert({
        name,
        description,
        level,
        price,
        slug,
        eventbrite_url,
        video_url,
      })
      .select()
      .single();
    if (error) {
      console.log(error);
      return;
    }

    redirect("admin/corsi");
  };
  return (
    <form action={createCourse}>
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
        </div>
        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Prezzo
          </label>
          <div className="mt-2">
            <input
              type="number"
              name="price"
              id="price"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="prezzo"
              required
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="eventbrite_url"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Eventbrite
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="eventbrite_url"
              id="eventbrite_url"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="url"
              required
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="video_url"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Video url
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="video_url"
              id="video_url"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="url"
              required
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="level"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Livello
          </label>
          <select
            id="level"
            name="level"
            className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
            defaultValue="principiante"
          >
            <option>principiante</option>
            <option>medio</option>
            <option>avanzato</option>
          </select>
        </div>
      </div>

      <div className="mt-4 flex gap-3 justify-end">
        <a
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          href="../corsi"
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
