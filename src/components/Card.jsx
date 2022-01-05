import React from "react";

const Card = ({ heading, para, image }) => {
  return (
    <div className="bg-white flex p-4  ">
      <div className="flex space-x-4 2xl:space-x-10">
        <div className="bg-newblue rounded-xl p-4 flex justify-center items-center  ">
          <img
            src={image}
            alt="vector"
            className=" h-20 lg:h-22 2xl:h-32  "
          />
        </div>
        <div className="2xl:space-y-6 space-y-2 flex flex-col text-left w-2/3">
          <h2 className="text-newyellow font-semibold text-xl 2xl:text-2xl ">
            {heading}
          </h2>
          <p className="text-newblue text-base sm:text-xl 2xl:text-2xl ">
            {para}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
