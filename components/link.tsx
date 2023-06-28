import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface LinkButtonProps {
  children: string | React.ReactNode;
  className?: string;
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
}

export const LinkButton = ({
  children,
  className = "",
  href,
  target = "_self",
}: LinkButtonProps) => {
  className = twMerge(
    "my-0 mx-1 text-2xl bg-white text-gray-900 font-semibold py-2 px-4 rounded-md border-2 border-gray-900 shadow-brutal cursor-pointer active:translate-y-1 active:shadow-[1px_2px_0px_0px_#000] ",
    className
  );
  return (
    <Link className={className} href={href} target={target}>
      {children}
    </Link>
  );
};
