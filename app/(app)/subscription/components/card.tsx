import { Button } from "@/components/button";
import { YoutubeVideo } from "@/components/video";
import { getURL } from "@/utils/helpers";
import { stripe } from "@/utils/stripe";
import { redirect } from "next/navigation";
import { handleSubscribe } from "../../actions";

const SubscriptionCard = () => {
  return (
    <div
      className={` bg-white w-full lg:w-96  transition-all p-5 border-4 border-gray-900 shadow-brutal`}
    >
      <div className="flex flex-col h-full gap-4">
        <YoutubeVideo id="_9R2eBlagnU" />

        <div className="flex flex-col gap-2 items-center">
          <form action={handleSubscribe}>
            <input type="hidden" name="mode" value="yearly" />
            <Button
              type="submit"
              className="bg-myGreen text-white font-semibold text-xl"
            >
              Abbonati a € 250/anno (2 mesi gratis)
            </Button>
          </form>
          <div>oppure</div>
          <form action={handleSubscribe}>
            <input type="hidden" name="mode" value="monthly" />
            <Button
              type="submit"
              className="bg-myGreen text-white font-semibold text-xl"
            >
              Abbonati a € 25/mese
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCard;
