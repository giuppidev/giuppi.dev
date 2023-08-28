import { handleSubscribe } from "@/app/(app)/actions";
import { ArrowIcon } from "@/app/(app)/dashboard/corsi/course";
import { getSession, isAdmin } from "@/app/supabase-server";
import { NavigationMenu } from "./header-buttons";
import { GiuppiLogo } from "./logo";
import Mobile from "./mobile-menu";
import { twMerge } from "tailwind-merge";

export default async function Header() {
  const session = await getSession();
  const isUserAdmin = await isAdmin();
  return (
    <>
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
      <Alert />
    </>
  );
}

function Alert() {
  return (
    <div className="flex gap-2 items-center  border-b-4 border-gray-900 p-3  text-gray-900 bg-white">
      <h2 className="text-2xl font-semibold leading-7 ">
        🚀 Corso NEXT 13 in partenza il 6 SETTEMBRE! 🚀
      </h2>
      <div className="md:flex hidden gap-2">
        <form action={handleSubscribe}>
          <input type="hidden" name="mode" value="monthly" />
          <button
            type="submit"
            className="flex underline hover:no-underline gap-2 items-center space-x-3  flex-grow text-secondary font-bold text-xl "
          >
            Iscriviti
            <ArrowIcon />
          </button>
        </form>
      </div>
      <div className="flex md:hidden">
        <Button>Iscriviti</Button>
      </div>
    </div>
  );
}

interface ButtonProps {
  children: React.ReactNode | string;
  className?: string;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
}

const Button = ({ children, className = "", onClick }: ButtonProps) => {
  className = twMerge(
    " my-0 mx-1 text-2xl bg-red-300 font-semibold text-gray-900 py-1 px-2 rounded-md border-2 border-gray-900 shadow-brutal cursor-pointer active:translate-y-1 active:shadow-brutalPressed   flex gap-4",
    className
  );

  return (
    <form action={handleSubscribe}>
      <input type="hidden" name="mode" value="monthly" />
      <button className={className} type="submit">
        {children}
      </button>
    </form>
  );
};
