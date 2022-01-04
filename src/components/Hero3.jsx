import React from "react";

const Hero3 = () => {
  return (
    <div className="h-screen ">
      <div
        className=" text-newblue hidden bg-hero3 bg-cover lg:bg-contain bg-left space-y-10 bg-white h-full  lg:flex flex-col bg-no-repeat px-4 md:px-10 xl:px-20 items-end 
       "
      >
        <h2 className="font-medium lg:text-5xl xl:text-6xl 3xl:text-7xl lg:pt-40 xl:pt-60 w-1/2 ">
          Master the Framework Of
          <br />
          Entrepreneurship
        </h2>
        <p className="text-2xl w-1/2">
          Learn how entrepreneurs generate a business idea,
          write a business plan and present their ideas to
          customers and investors.
        </p>
        <span className="w-1/2">
          <a
            href=""
            className="bg-newyellow font-semibold flex justify-center text-xl xl:text-2xl hover:text-white py-3 w-40 xl:w-52 2xl:w-52"
          >
            APPLY NOW
          </a>
        </span>
      </div>

      <div className="flex flex-col lg:hidden h-full ">
        <div className="flex flex-col  justify-center px-4 py-4 space-y-4 ">
          <h2 className="font-medium text-2xl sm:text-5xl md:text-4xl">
            Master the Framework Of
            <br />
            Entrepreneurship
          </h2>
          <p className="text-xl">
            Learn how entrepreneurs generate a business
            idea, write a business plan and present their
            ideas to customers and investors.
          </p>
          <a
            href=""
            className="bg-newyellow font-semibold flex justify-center text-base sm:text-2xl hover:text-white py-1 md:py-3 sm:py-2 w-32  sm:w-40  "
          >
            APPLY NOW
          </a>
        </div>
        <div className="bg-hero3sm bg-cover  h-full bg-no-repeat bg-right "></div>
      </div>
    </div>
  );
};

export default Hero3;
