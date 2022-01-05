import React from "react";

const MentorCard = ({ name, des, photo, place }) => {
  return (
    <div className="flex flex-col items-center text-newblue text-center">
      <img
        className="2xl:h-80 2xl:w-80 lg:h-40 lg:w-40 xl:h-44 xl:w-44 h-32 w-32"
        src={photo}
        alt="mentor image"
      />
      <h2 className="font-semibold text-base lg:text-2xl lg:pt-4">
        {name}
      </h2>
      <h3 className="text-sm lg:text-xl">{des}</h3>
      <h3 className="text-sm lg:text-xl">{place}</h3>
    </div>
  );
};

export default MentorCard;
