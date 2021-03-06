import React from "react";

const Price = () => {
  return (
    <div className="px-4 md:px-10 2xl:px-20 bg-dots bg-no-repeat bg-cover pb-32 ">
      <h2 className="font-semibold flex text-4xl 2xl:text-5xl  py-10 2xl:py-20 text-center justify-center text-newyellow">
        Price
      </h2>
      <div className="bg-newgray p-10 h-1/2">
        <h2 className=" font-medium text-2xl 2xl:text-4xl py-6">
          {" "}
          What's included in this price? Everything{" "}
        </h2>
        <div className="p-4 flex flex-col lg:flex-row lg:justify-between items-center ">
          <ul className="list-square text-xl 2xl:text-3xl pb-6 lg:pb-0">
            <li>Become a part of the Community</li>
            <li>Engage with Harvard tutors</li>
            <li>Get guidance from Industry experts.</li>
            <li>Network with like-minded people</li>
            <li>Access to premium educational resources</li>
          </ul>
          <div className="flex  flex-col lg:flex-row text-center gap-10 lg:space-x-6 ">
            <div className="bg-newblue border-2 border-newyellow divide-y-2 divide-newyellow">
              <h2 className=" text-2xl p-6 text-newyellow font-semibold">
                $249
              </h2>
              <h2 className="text-white text-2xl p-4 2xl:p-6">
                Regular <br /> Application
                <br /> <br /> 17th February 2022
              </h2>
            </div>
            <div className="bg-newblue border-2 border-newyellow divide-y-2 divide-newyellow">
              <h2 className="text-newyellow font-semibold  text-2xl p-6">
                $199
              </h2>
              <h2 className="text-white  text-2xl p-4">
                Early <br /> Application
                <br />
                <br />
                10th February 2022
              </h2>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center pt-6 2xl:p-6">
          <a
            href=""
            className="bg-newyellow font-semibold flex justify-center text-xl xl:text-2xl hover:text-white py-3 w-40 xl:w-52 2xl:w-52"
          >
            APPLY NOW
          </a>
        </div>
      </div>
    </div>
  );
};

export default Price;
