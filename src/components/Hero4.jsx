import React from "react";
import gsllogo from "../images/gsl.svg";
const Hero4 = () => {
  return (
    <div className="">
      <div
        className=" text-newblue hidden bg-gsl bg-cover  lg:bg-50 pb-20 bg-right-bottom
       space-y-10 bg-newgray 2xl:h-full  lg:flex flex-col  bg-no-repeat px-4 md:px-10 2xl:px-20 
       "
      >
        <div className="pt-16  ">
          <img
            src={gsllogo}
            alt="gsl logo"
            className="h-20 "
          />
        </div>
        <h2 className="font-semibold lg:text-4xl 2xl:text-6xl 3xl:text-7xl  ">
          Get access to world's
          <br />
          largest student community
        </h2>
        <a
          href=""
          className="bg-newyellow font-semibold flex justify-center text-xl 2xl:text-2xl hover:text-white py-3 w-40 2xl:w-52 "
        >
          APPLY NOW
        </a>
        <p className="text-2xl pb-10">
          Free membership for students for students <br />
          participating in the GSIP program
        </p>
      </div>

      <div className="flex flex-col lg:hidden h-full ">
        <div className="flex flex-col  justify-center px-4 py-4 space-y-4 ">
          <div className="pt-8 ">
            <img
              src={gsllogo}
              alt="gsl logo"
              className="h-14 "
            />
          </div>
          <h2 className="font-semibold text-2xl sm:text-5xl md:text-4xl">
            Get access to world's
            <br />
            largest student community
          </h2>
          <a
            href=""
            className="bg-newyellow font-semibold flex justify-center text-base sm:text-2xl hover:text-white py-1 md:py-3 sm:py-2 w-32  sm:w-40  "
          >
            APPLY NOW
          </a>
          <p>
            Free membership for students for students
            participating in the GSIP program
          </p>
        </div>
        <div className="bg-gsl bg-cover  h-80 bg-no-repeat bg-right "></div>
      </div>
    </div>
  );
};

export default Hero4;
