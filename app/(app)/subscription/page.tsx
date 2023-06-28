import SubscriptionHero from "./components/hero";
import InfoCard from "./components/info";
import Description from "./components/sections";

export default async function SubscriptionPage() {
  return (
    <>
      <SubscriptionHero />
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
