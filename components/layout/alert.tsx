import { handleSubscribe } from "@/app/(app)/actions";
import { twMerge } from "tailwind-merge";
import { ArrowIcon } from "../course";

export default function Alert() {
  return (
    <div className="flex gap-2 items-center  border-b-4 border-gray-900 p-3  text-gray-900 bg-white">
      <h2 className="text-2xl font-semibold leading-7 ">
        🚀 Corso NEXT 13 in corso! 🚀
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
