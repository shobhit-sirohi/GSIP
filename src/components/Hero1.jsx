import React from "react";

const Hero1 = () => {
  return (
    <div className="h-screen ">
      <div
        className=" text-newblue hidden bg-hero1 bg-cover lg:bg-contain bg-right h-full space-y-10 bg-white xl:h-full  lg:flex flex-col bg-no-repeat px-4 md:px-10 xl:px-20 
       "
      >
        <h2 className="font-semibold lg:text-5xl xl:text-6xl 3xl:text-7xl pt-60 ">
          YOUR STEPPING STONE TO <br />
          BECOME AN EXPERT <br />
          STARTS HERE
        </h2>
        <a
          href=""
          className="bg-newyellow font-semibold flex justify-center text-xl xl:text-2xl hover:text-white py-3 w-40 xl:w-52 2xl:w-52"
        >
          APPLY NOW
        </a>
      </div>

      <div className="flex flex-col lg:hidden h-full ">
        <div className="flex flex-col  justify-center px-4 py-4 space-y-4 ">
          <h2 className="font-semibold text-2xl sm:text-5xl md:text-4xl">
            YOUR STEPPING STONE TO <br />
            BECOME AN EXPERT <br />
            STARTS HERE
          </h2>
          <a
            href=""
            className="bg-newyellow font-semibold flex justify-center text-base sm:text-2xl hover:text-white py-1 md:py-3 sm:py-2 w-32  sm:w-40  "
          >
            APPLY NOW
          </a>
        </div>
        <div className="bg-hero1 bg-cover  h-full bg-no-repeat bg-right "></div>
      </div>
    </div>
  );
};

export default Hero1;
