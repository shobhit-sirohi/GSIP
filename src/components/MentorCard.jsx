import React from "react";

const MentorCard = ({ name, des, photo, place }) => {
  return (
    <div className="flex flex-col items-center text-center text-newblue">
      <img
        className="w-32 h-32 2xl:h-80 2xl:w-80 lg:h-40 lg:w-40 xl:h-44 xl:w-44"
        src={photo}
        alt="mentor image"
      />
      <h2 className="text-base font-semibold lg:text-2xl lg:pt-4">
        {name}
      </h2>
      <h3 className="text-sm lg:text-xl">{des}</h3>
      <h3 className="text-sm lg:text-xl">{place}</h3>
    </div>
  );
};

export default MentorCard;
