import { Button } from "@/components/button";
import { YoutubeVideo } from "@/components/video";
import { Database } from "@/types/supabase";
import { handleMentorship, handleSubscribe } from "../../actions";

const ProjectCard = () => {
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
          <form action={handleSubscribe}>
            <input type="hidden" name="mode" value="monthly" />
            <Button
              type="submit"
              className="bg-myGreen text-white font-semibold text-xl"
            >
              Iscriviti a € 25/mese
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
