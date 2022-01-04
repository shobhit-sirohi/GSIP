import React from "react";

const Card = ({ heading, para, image }) => {
  return (
    <div className="bg-white flex p-4  ">
      <div className="flex space-x-4 lg:space-x-10">
        <div className="bg-newblue rounded-xl p-4 flex justify-center items-center  ">
          <img
            src={image}
            alt="vector"
            className=" h-20 lg:h-40 xl:h-52 "
          />
        </div>
        <div className="lg:space-y-6 space-y-2 flex flex-col text-left w-2/3">
          <h2 className="text-newyellow font-semibold text-xl lg:text-2xl xl:text-3xl">
            {heading}
          </h2>
          <p className="text-newblue text-base sm:text-xl lg:text-2xl xl:text-3xl">
            {para}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
