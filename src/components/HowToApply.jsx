import React from "react";

const HowToApply = () => {
  return (
    <div className="bg-newgray bg-sittinggirl lg:bg-contain bg-contain bg-no-repeat lg:bg-right bg-right-bottom h-screen md:px-10 xl:px-20 px-6  ">
      <h2 className="font-semibold text-3xl  xl:text-4xl 2xl:text-5xl py-10 text-center  text-newblue">
        How to Apply
      </h2>
      <div className="lg:w-1/2 ">
        <ul className="text-xl lg:text-3xl font-medium text-newblue list-square divide-y-4 divide-newyellow lg:pb-10 ">
          <li className="py-6">
            Submit your application by clicking on Apply
            Now.
          </li>
          <li className="py-6">
            Get an invite for an interview via email.
          </li>
          <li className="py-6">
            Get selected & begin your learning curve.
          </li>
        </ul>

        <a
          href=""
          className="bg-newyellow font-semibold flex justify-center text-2xl xl:text-3xl hover:text-white py-3 xl:py-6 w-40 xl:w-52 2xl:w-72"
        >
          APPLY NOW
        </a>
      </div>
    </div>
  );
};

export default HowToApply;
