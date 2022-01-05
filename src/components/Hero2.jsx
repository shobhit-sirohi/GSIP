import React from "react";

const Hero2 = () => {
  return (
    <div className="">
      <div
        className=" text-newblue hidden bg-hero2 bg-cover lg:bg-50 pb-32 bg-right space-y-6 bg-white  lg:flex flex-col bg-no-repeat px-4 md:px-10 2xl:px-20
       "
      >
        <h3 className="font-light text-3xl 2xl:text-5xl 3xl:text-6xl pt-28 3xl:pt-40">
          REGISTRATION FOR
        </h3>
        <h2 className="font-semibold text-5xl 2xl:text-7xl 3xl:text-8xl pt-4">
          COHORT 2 is on
        </h2>
        <span className="text-2xl 2xl:text-3xl 3xl-text-4xl  font-medium space-y-2">
          <p>
            Early application deadline: 10th February, 2022
          </p>
          <p>
            Regular application deadline: 17th February,
            2022
          </p>
          <p>Program starts: 19th February, 2022</p>
        </span>
      </div>

      <div className="flex flex-col lg:hidden h-full ">
        <div className="flex flex-col  justify-center px-4 py-4 ">
          <h3 className="font-light text-2xl sm:text-4xl 3xl:text-5xl ">
            REGISTRATION FOR
          </h3>
          <h2 className="font-semibold text-4xl sm:text-6xl 3xl:text-7xl pt-2">
            COHORT 2 is on
          </h2>
          <span className="text-sm  sm:text-xl 3xl-text-2xl  font-medium pt-2 ">
            <p>
              Early application deadline: 30th December 2021
            </p>
            <p>
              Regular application deadline: 15th January
              2022
            </p>
            <p>Program starts: 5th February</p>
          </span>
        </div>
        <div className="bg-hero2 bg-cover  h-80 bg-no-repeat bg-right "></div>
      </div>
    </div>
  );
};

export default Hero2;
