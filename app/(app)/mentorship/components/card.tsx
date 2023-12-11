import { Button } from "@/components/button";
import { YoutubeVideo } from "@/components/video";
import { Database } from "@/types/supabase";
import { handleMentorship } from "../../actions";

const MentoshipCard = () => {
  return (
    <div
      className={` bg-white  w-full lg:w-96  transition-all p-5 border-4 border-gray-900 shadow-brutal`}
    >
      <div className="flex flex-col h-full gap-8 ">
        <div className="relative bg-white  w-full  flex justify-center border-4 border-gray-900">
          <img
            src={
              "https://res.cloudinary.com/de30mupo1/image/upload/c_limit,h_753,q_80/v1687969988/giuppi.dev/nomade.png"
            }
            alt="GIUPPI"
            className=" w-full  object-cover"
          />
        </div>
        <div className="flex flex-col gap-2 items-center">
          <form action={handleMentorship}>
            <input type="hidden" name="duration" value="30" />
            <Button
              type="submit"
              className="bg-myGreen text-white font-semibold text-xl"
            >
              30 MINUTI - € 40
            </Button>
          </form>
          <div>oppure</div>
          <form action={handleMentorship}>
            <input type="hidden" name="duration" value="60" />
            <Button
              type="submit"
              className="bg-myGreen text-white font-semibold text-xl"
            >
              60 MINUTI - € 60
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MentoshipCard;
