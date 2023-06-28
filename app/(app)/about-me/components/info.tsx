"use client";

const InfoCard = () => {
  return (
    <div
      className={` bg-white w-full lg:w-96 h-fit   transition-all p-5 border-4 border-gray-900 shadow-brutal mb-8`}
    >
      <h1 className="font-semibold text-5xl pb-4">Overview</h1>
      <div className="flex flex-col h-full gap-8">
        <div>
          <div className=" text-lg">nome</div>
          <div className="flex gap-2 items-center">
            <div className="text-3xl font-semibold">Giuseppe Funicello</div>
          </div>
        </div>

        <div>
          <div className=" text-lg">etichette</div>
          <div className="flex gap-2  flex-col">
            <div className="text-3xl font-semibold">Frontend developer</div>
            <div className="text-3xl font-semibold">Insegnante</div>
            <div className="text-3xl font-semibold">Freelance</div>
            <div className="text-3xl font-semibold">Youtuber</div>
          </div>
        </div>
        <div>
          <div className=" text-lg">linguaggio preferito</div>
          <div className="flex gap-2 items-center">
            <div className="text-3xl font-semibold">Typescript</div>
          </div>
        </div>
        <div>
          <div className=" text-lg">stack del ❤️</div>
          <div className="flex gap-2 items-center">
            <div className="text-2xl sm:text-3xl font-semibold">
              Typescript+React+Next
            </div>
          </div>
        </div>
        <div>
          <div className=" text-lg">altro</div>
          <div className="flex flex-col gap-2 ">
            <div className="text-3xl font-semibold">Nodejs</div>
            <div className="text-3xl font-semibold">GOlang</div>
            <div className="text-3xl font-semibold">Tailwind</div>
          </div>
        </div>
        <div>
          <div className=" text-lg">hobby</div>
          <div className="flex flex-col gap-2 ">
            <div className="text-3xl font-semibold">viaggiare</div>
            <div className="text-3xl font-semibold">chitarra manouche</div>
            <div className="text-3xl font-semibold">leggere</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;

/* <img
              src="/images/teacher.jpg"
              alt=""
              className="w-16 h-16 rounded-2xl border-2 border-gray-900  shadow-brutal"
            /> */
