import { createServerSupabaseClient } from "@/app/supabase-server";

import MentorshipHero from "./components/hero";
import Description from "./components/sections";
import InfoCard from "./components/info";

export default async function Mentorship() {
  const supabase = createServerSupabaseClient();
  const { data: mentorship } = await supabase
    .from("products")
    .select()
    .eq("product_type", "mentorship")
    .single();

  if (!mentorship) {
    return <div>Mentorship not found</div>;
  }

  return (
    <>
      <MentorshipHero mentorship={mentorship} />
      <div className="flex flex-col lg:flex-row">
        <div></div>
      </div>
      <div className="py-8 w-screen ">
        <div className="flex flex-col-reverse lg:flex-row justify-between max-w-7xl px-6 lg:px-8 mx-auto">
          <Description />
          <InfoCard />
        </div>
      </div>
    </>
  );
}
