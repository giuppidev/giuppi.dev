import { Database } from "@/types/supabase";
import { stripe } from "@/utils/stripe";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import slugify from "slugify";

type CourseType = Database["public"]["Enums"]["course_type_enum"];

export default async function Edit({
  params,
}: {
  params: { course_id: string };
}) {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data: course } = await supabase
    .from("products")
    .select()
    .eq("id", params.course_id)
    .single();

  const updateCourse = async (formData: FormData) => {
    "use server";
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const visible = formData.get("visible") as string;
    const course_type = formData.get("type") as CourseType;
    const tags = formData.get("tags") as string;
    const supabase = createServerComponentClient<Database>({ cookies });
    const slug = slugify(name, { lower: true });

    const { error, data } = await supabase
      .from("products")
      .update({
        name,
        description,
        visible: !!visible,
        product_type: course_type,
        tags: tags.split(","),
        slug,
      })
      .eq("id", params.course_id);
    if (error) {
      console.log(error);
    } else {
      redirect(`admin/corsi/${params.course_id}`);
    }
  };

  if (!course) {
    return <div>Course not found</div>;
  }
  return (
    <form action={updateCourse}>
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
              defaultValue={course.name || ""}
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
              rows={10}
              defaultValue={course.description || ""}
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="tags"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Tags
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="tags"
              id="tags"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="nome"
              defaultValue={course.tags || ""}
            />
          </div>
        </div>
      </div>{" "}
      <div>
        <label
          htmlFor="discount"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Type
        </label>
        <select
          id="type"
          name="type"
          className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          defaultValue={course.product_type || "course"}
        >
          <option>course</option>
          <option>masterclass</option>
          <option>mentorship</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="visible"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Visible
        </label>
        <div className="mt-2">
          <input
            name="visible"
            id="visible"
            type="checkbox"
            className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            defaultChecked={course.visible || false}
          />
        </div>
      </div>
      <div className="mt-4 flex gap-3 justify-end">
        <a
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          href={`/admin/corsi/${params.course_id}/`}
        >
          Cancel
        </a>
        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
        >
          Update
        </button>
      </div>
    </form>
  );
}
