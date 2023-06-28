import { createServerSupabaseClient } from "@/app/supabase-server";
import FAQ from "./components/faq";
import Features from "./components/features";
import Hero from "./components/hero";
import Contact from "./components/contact";
import { Target } from "./components/target";
import Prices from "./components/prices";

export default async function Home() {
  const supabase = createServerSupabaseClient();
  const { data } = await supabase.auth.getSession();

  return (
    <main className="">
      <Hero />
      <Claim />
      <Features />
      <Target />
      <Prices />
      <FAQ />
      <Contact />
    </main>
  );
}

const Claim = () => {
  return (
    <div className="border-b-4 border-gray-900 flex justify-center py-16 bg-white">
      <div className="relative text-3xl lg:text-5xl max-w-5xl text-center">
        <span className="absolute -top-10 left-2 text-8xl">“</span> Hai presente
        il senior developer a cui chiedere una mano e con cui fare pair
        programming? Ecco, quello sono io.{" "}
        <span className=" absolute -bottom-10 right-0 text-8xl">„</span>
      </div>
    </div>
  );
};
