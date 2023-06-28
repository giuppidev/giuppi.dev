"use client";

const InfoCard = () => {
  return (
    <div
      className={` bg-white w-full lg:w-96 h-fit   transition-all p-5 border-4 border-gray-900 shadow-brutal mb-8`}
    >
      <h1 className="font-semibold text-5xl pb-4">Overview</h1>
      <div className="flex flex-col h-full gap-2">
        <div>
          <div className=" text-lg">mentor</div>
          <div className="flex gap-2 items-center">
            <div className="text-3xl font-semibold">Giuseppe Funicello</div>
          </div>
        </div>

        <div>
          <div className=" text-lg">durata</div>
          <div className="flex gap-2 items-center">
            <div className="text-3xl font-semibold">30 minuti / 1 ora</div>
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
