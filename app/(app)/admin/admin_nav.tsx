"use client";
import { FolderIcon, UsersIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function checkCurrentPage(href: string, current: string) {
  return current.startsWith(href);
}

const navigation = [
  { name: "Corsi", href: "/admin/corsi", icon: FolderIcon },
  { name: "Users", href: "/admin/users", icon: UsersIcon },
  { name: "Tools", href: "/admin/tools", icon: UsersIcon },
];

export default function AdminNavbar() {
  const pathname = usePathname();
  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-myYellow px-6 pb-4">
      <nav className="mt-8 flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-2">
          {navigation.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={classNames(
                  checkCurrentPage(item.href, pathname)
                    ? "bg-myGreen text-white"
                    : "text-gray-900  hover:text-white hover:bg-myGreen",
                  "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                )}
              >
                <item.icon
                  className={classNames(
                    checkCurrentPage(item.href, pathname)
                      ? "text-white"
                      : "text-gray-900 group-hover:text-white",
                    "h-6 w-6 shrink-0"
                  )}
                  aria-hidden="true"
                />
                <span className="hidden lg:block">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
