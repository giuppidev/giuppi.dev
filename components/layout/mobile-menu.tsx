"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars2Icon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { GiuppiLogo, Logo } from "./logo";
import { User } from "@supabase/supabase-js";
import { useSupabase } from "@/app/supabase-provider";
import { useRouter } from "next/navigation";
export const navigation = [
  { name: "Come funziona", href: "#features" },
  { name: "Corsi", href: "#corsi" },
  // { name: "PROGETTO NOMADE", href: "/progetto-nomade" },
  { name: "Abbonati", href: "#subscription" },
];

interface NavigationMenuProps {
  isAdmin: boolean;
  user?: User;
}
export default function Mobile({ isAdmin, user }: NavigationMenuProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { supabase } = useSupabase();
  const router = useRouter();
  async function signout() {
    await supabase.auth.signOut();
    setMobileMenuOpen(false);
    router.push("/");
  }
  return (
    <>
      <div className="flex lg:hidden pr-6">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-12 w-12" aria-hidden="true" />
        </button>
      </div>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-4 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="mt-2">
              <span className="sr-only">Giuppi.dev</span>
              <GiuppiLogo className="w-64 lg:w-64" />
            </a>
            <div className="pr-5 pt-4">
              <button
                type="button"
                className="-m-2.5 rounded-md  text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-12 w-12" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y-4 divide-gray-900">
              <div className="space-y-6 py-10">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-5xl  leading-9 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
                {isAdmin && (
                  <a
                    href="/admin/corsi"
                    className="-mx-3 block rounded-lg px-3 py-2 text-5xl  leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    ADMIN
                  </a>
                )}
                {!!user && (
                  <a
                    href="/dashboard/corsi"
                    className="-mx-3 block rounded-lg px-3 py-2 text-5xl  leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    DASHBOARD
                  </a>
                )}
              </div>
              <div className="py-6">
                <HeaderButtons loggedIn={!!user} signout={signout} />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
}

export const HeaderButtons = ({
  loggedIn,
  signout,
}: {
  loggedIn: boolean;
  signout: () => void;
}) => {
  if (loggedIn) {
    return (
      <button
        onClick={signout}
        className="-mx-3 block rounded-lg px-3 py-2.5 text-5xl leading-7 text-gray-900 hover:bg-gray-50"
      >
        LOGOUT
      </button>
    );
  }

  return (
    <a
      href="/auth/sign-in"
      className="-mx-3 block rounded-lg px-3 py-2.5 text-5xl leading-7 text-gray-900 hover:bg-gray-50"
    >
      LOGIN
    </a>
  );
};
