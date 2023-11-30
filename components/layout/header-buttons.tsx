"use client";
import { useSupabase } from "@/app/supabase-provider";
import { User } from "@supabase/supabase-js";
import { usePathname, useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

export const navigation = [
  { name: "CALENDARIO", href: "/calendario" },
  { name: "CORSI", href: "/corsi" },
  { name: "PROGETTO NOMADE", href: "/progetto-nomade" },
  { name: "ABOUT ME", href: "/about-me" },
];

interface NavigationMenuProps {
  isAdmin: boolean;
  user?: User;
}

export const NavigationMenu = ({ isAdmin, user }: NavigationMenuProps) => {
  const pathName = usePathname();
  return (
    <div className="hidden lg:flex l items-center">
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={twMerge(
            `text-2xl font-semibold leading-6 text-gray-900 border-b-4 border-b-transparent py-2 mx-6`,
            pathName.startsWith(item.href)
              ? " border-b-gray-900  "
              : "hover:border-b-gray-900 "
          )}
        >
          {item.name}
        </a>
      ))}
      {isAdmin && (
        <a
          href="/admin/corsi"
          className={twMerge(
            `text-2xl font-semibold leading-6 text-red-800x border-b-4 border-b-transparent py-2 mx-6`,
            pathName.startsWith("/admin")
              ? " border-b-gray-900  "
              : "hover:border-b-gray-900 "
          )}
        >
          ADMIN
        </a>
      )}
      {!!user && (
        <a
          href="/dashboard/corsi"
          className={twMerge(
            `text-2xl font-semibold leading-6  py-6 border-l-4 border-l-gray-900 px-6 hover:bg-gray-200  `,
            pathName.startsWith("/dashboard")
              ? " border-b-gray-900  "
              : "hover:border-b-gray-900 "
          )}
        >
          DASHBOARD
        </a>
      )}
      <HeaderButtons loggedIn={!!user} />
    </div>
  );
};

export const HeaderButtons = ({ loggedIn }: { loggedIn: boolean }) => {
  const { supabase } = useSupabase();
  const router = useRouter();
  async function signout() {
    await supabase.auth.signOut();
    router.push("/");
  }

  if (loggedIn) {
    return (
      <button
        onClick={signout}
        className={twMerge(
          `text-2xl text-white font-semibold leading-6  py-6 border-l-4 border-l-gray-900 pl-8 bg-myGreen hover:bg-green-700  px-6`
        )}
      >
        LOGOUT
      </button>
    );
  }

  return (
    <a
      href="/auth/sign-in"
      className={twMerge(
        `text-2xl font-semibold leading-6  py-6 border-l-4 border-l-gray-900 pl-8 hover:bg-gray-200  px-6 lg:px-8`
      )}
    >
      LOGIN
    </a>
  );
};
