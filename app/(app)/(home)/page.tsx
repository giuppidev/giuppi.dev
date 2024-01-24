import { createServerSupabaseClient } from "@/app/supabase-server";
import { Database } from "@/types/supabase";
import Contact from "./components/contact";
import Content from "./components/content";
import FAQ from "./components/faq";
import Features from "./components/features";
import Hero from "./components/hero";
import Intro from "./components/intro";
import Pricing from "./components/pricing";
import { Target } from "./components/target";
import AboutMe from "./components/about-me";
import Testimonials from "./components/testimonials";
import Cta from "./components/cta";

type Course = Database["public"]["Tables"]["products"]["Row"];

export default async function Home() {
  const supabase = createServerSupabaseClient();
  const now = new Date().toISOString();

  const { data } = await supabase
    .from("lessons")
    .select(`*, products!inner(*)`)
    .gte("event_timestamp", now)
    .filter("products.show", "eq", true)
    .order("event_timestamp")
    .limit(4);
  const { data: courses } = await supabase
    .from("products")
    .select()
    .or("product_type.eq.course,product_type.eq.masterclass")
    .eq("show", true)
    .order("start_date");
  return (
    <main className="">
      <Hero />
      <Intro />
      <Target />
      <Features />
      <Cta />
      <Content courses={courses as Course[]} />
      <AboutMe />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
    </main>
  );
}
