import { getAllUsers, isAdmin } from "@/app/supabase-server";
import OrderEmail from "@/emails";
import { sendMail } from "@/utils/nodemailer";
import { render } from "@react-email/render";
import { redirect } from "next/navigation";

export default async function AdminCorsi() {
  const userAdmin = await isAdmin();
  if (!userAdmin) {
    redirect("/");
  }
  const users = await getAllUsers();

  const sendWelcomeMail = async () => {
    "use server";
    const emailHtml = render(<OrderEmail />);

    const options = {
      from: '"Giuseppe Funicello" <info@giuppi.dev>',
      to: "g.funicello@gmail.com",
      subject: "🚀 Benvenuto nella giuppi<dev> academy!",
      html: emailHtml,
    };

    try {
      await sendMail(options);
      console.log("sent");
    } catch (e) {
      console.log({ invioError: JSON.stringify(e) });
    }
  };
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Utenti
          </h1>
          <form action={sendWelcomeMail}>
            <button>Send</button>
          </form>
          <p className="mt-2 text-sm text-gray-700">Lista degli utenti</p>
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
                    Description
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Email
                  </th>

                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {users?.map((user) => (
                  <tr key={user.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      {user.first_name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {user.last_name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {user.email}
                    </td>

                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <a
                        href={`/admin/users/${user.id}`}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        View
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
