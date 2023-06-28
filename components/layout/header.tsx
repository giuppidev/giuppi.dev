import { getSession, isAdmin } from "@/app/supabase-server";
import { NavigationMenu } from "./header-buttons";
import { GiuppiLogo, Logo } from "./logo";
import Mobile from "./mobile-menu";

export default async function Header() {
  const session = await getSession();
  const isUserAdmin = await isAdmin();
  return (
    <header className=" inset-x-0 top-0  bg-white border-b-4 border-gray-900">
      <nav
        className="flex  items-center justify-between  border-b-gray-800"
        aria-label="Global"
      >
        <div className="flex lg:flex-1  px-4 lg:px-8 py-6 lg:py-0">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Programmatore nomade</span>
            <GiuppiLogo className="w-64 lg:w-64" />
          </a>
        </div>
        <Mobile isAdmin={!!isUserAdmin} user={session?.user} />
        <NavigationMenu isAdmin={!!isUserAdmin} user={session?.user} />
      </nav>
    </header>
  );
}
