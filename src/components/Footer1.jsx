import React from "react";

const Footer1 = () => {
  return (
    <div className=" bg-black bg-earth bg-no-repeat bg-right bg-cover lg:bg-contain flex flex-col lg:flex-row justify-between h-auto px-4 md:px-10 2xl:px-20 py-20">
      <div>
        <h2 className="text-4xl lg:text-5xl tracking-wider font-semibold text-white pb-20 lg:pb-0">
          Expand your mind. <br />
          With experiences as wide <br /> as the world.
        </h2>
      </div>
      <div className="flex flex-col divide-y-4 w-64 text-3xl lg:text-4xl font-semibold">
        <a
          className="text-white p-2 hover:text-newyellow"
          href=""
        >
          WORKSHOPS
        </a>
        <a
          href=""
          className="text-white p-2 hover:text-newyellow"
        >
          MENTORSHIP
        </a>
        <a
          href=""
          className="text-white p-2 hover:text-newyellow"
        >
          INTERNSHIP
        </a>
        <div className="py-4">
          <a
            href=""
            className="bg-newyellow font-semibold flex justify-center text-xl 2xl:text-2xl hover:text-white py-3 w-40 2xl:w-52 "
          >
            APPLY NOW
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
