import { Button } from "@/components/button";
import { twMerge } from "tailwind-merge";
import { handleSubscribe } from "../../actions";

const academy = {
  features: [
    "Nuovi video ogni settimana",
    "Catalogo sempre disponibile",
    "Partecipa con me ad un progetto reale",
    "Supporto e pair programming",
  ],
};

export default function Pricing() {
  return (
    <div
      className="bg-myYellow py-20  border-b-4 border-gray-900"
      id="subscription"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center lg:max-w-7xl">
          <p className=" text-5xl font-semibold  tracking-tight text-gray-900 sm:text-7xl">
            Come entrare
          </p>
        </div>
        <div className=" mt-8 mx-4 max-w-7xl   sm:mt-8 lg:mx-0 lg:grid md:grid-cols-2">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h1 className="text-4xl font-semibold tracking-tight text-gray-900">
              Tutto molto semplice
            </h1>

            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-900 sm:gap-6"
            >
              {academy.features.map((feature) => (
                <li key={feature} className="flex gap-x-3 text-3xl">
                  <Arrow
                    className="h-8 w-5 flex-none text-gray-950"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:flex-shrink-0 ">
            <div className="rounded-2xl py-10 text-center flex flex-col lg:justify-center lg:py-16 gap-8">
              <div className="mx-auto max-w-lg px-8 flex flex-col lg:flex-row  justify-between items-center bg-white py-8 w-full gap-8 border-4 border-gray-950 shadow-brutal">
                <div className="text-left w-full">
                  <p className=" flex items-baseline justify-start w-full">
                    <span className="text-6xl font-bold tracking-tight text-gray-900">
                      € 25
                    </span>

                    <span className="text-3xl leading-6 text-gray-600">
                      /mese
                    </span>
                  </p>
                  <p className="lg:text-lg text-gray-900">
                    Zero vincoli,{" "}
                    <span className="font-medium">esci quando vuoi</span>
                  </p>
                </div>
                <form action={handleSubscribe} className="">
                  <input type="hidden" name="mode" value="monthly" />
                  <Button
                    type="submit"
                    className="bg-cyan-200 text-black font-semibold text-xl  relative uppercase"
                  >
                    Entra
                  </Button>
                </form>
              </div>
              <div className="mx-auto max-w-lg  gap-8 px-8 flex flex-col lg:flex-row  justify-between  bg-white py-8 items-center w-full border-4 border-gray-950 shadow-brutal">
                <div className="text-left w-full">
                  <p className=" flex items-baseline ">
                    <span className="text-4xl lg:text-4xl font-bold  text-gray-900">
                      1 mese gratis
                    </span>
                  </p>
                  <p className="lg:text-lg text-gray-900">
                    Con 6 mesi di abbonamento 🚀
                  </p>
                </div>
                <form action={handleSubscribe} className="">
                  <input type="hidden" name="mode" value="six_months" />
                  <Button
                    type="submit"
                    className="bg-green-300 text-black font-semibold text-xl  relative uppercase"
                  >
                    Entra
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Arrow = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="19"
    viewBox="0 0 28 19"
    fill="none"
    {...props}
  >
    <path
      d="M19.8201 18.165C20.0623 13.2867 22.9685 10.3806 27.2931 9.99999L27.2931 8.13038C22.9685 7.74981 20.0623 4.87823 19.8201 -1.73273e-06L16.6025 0.691946C16.7755 2.45641 17.3983 4.01329 18.4362 5.43179C19.5087 6.81568 20.7196 7.58483 22.1035 8L6.99382e-07 8L8.74228e-07 10L22.1035 9.99999C20.7196 10.4152 19.5087 11.3147 18.4362 12.7332C17.3983 14.1517 16.7755 15.7086 16.6025 17.4384L19.8201 18.165Z"
      fill="currentColor"
    />
  </svg>
);
