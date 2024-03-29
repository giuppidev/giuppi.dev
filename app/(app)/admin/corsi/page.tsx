import {
  createServerSupabaseClient,
  getAllCourses,
} from "@/app/supabase-server";

export default async function AdminCorsi() {
  const courses = await getAllCourses();
  const supabase = await createServerSupabaseClient();
  const session = await supabase.auth.getSession();

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Corsi
          </h1>
          <p className="mt-2 text-sm text-gray-700">Lista dei corsi</p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <a
            href="/admin/corsi/create"
            className="block rounded-md bg-myGreen px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-lime-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Aggiungi corso
          </a>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    Name
                  </th>

                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    show
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    published
                  </th>

                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {courses?.map((course) => (
                  <tr key={course.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      {course.name}
                    </td>

                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {course.show ? "Yes" : "No"}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {course.published ? "Yes" : "No"}
                    </td>

                    <td className="relative space-x-2 whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <a
                        href={`/admin/corsi/${course.id}`}
                        className="text-myGreen hover:text-indigo-900"
                      >
                        View
                      </a>
                      <a
                        href={`/admin/corsi/${course.id}/edit`}
                        className="text-myGreen hover:text-indigo-900"
                      >
                        Edit
                      </a>
                      <a
                        href={`/admin/corsi/${course.id}/lessons/create`}
                        className="text-myGreen hover:text-indigo-900"
                      >
                        Crea lezione
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
