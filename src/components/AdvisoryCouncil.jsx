import React from "react";
import harvard from "../images/harvard.svg";
import mit from "../images/mit.svg";
import stanford from "../images/stanford.svg";
const AdvisoryCouncil = () => {
  return (
    <div className=" md:px-10 xl:px-20 px-4 bg-newblue ">
      <h2 className=" font-semibold text-3xl  xl:text-4xl 2xl:text-5xl pt-20 text-newyellow text-center">
        Advisory Council
      </h2>
      <h3 className="  text-2xl  xl:text-3xl 2xl:text-4xl pt-10 text-white text-center">
        Learn from Ivy League Mentors
      </h3>
      <div className="flex flex-col lg:flex-row lg:space-x-16 space-y-6 py-20 justify-center">
        <img
          src={harvard}
          alt="harvard logo"
          className="h-14 lg:h-auto"
        />
        <img
          src={mit}
          alt="mit logo"
          className="h-14 lg:h-auto"
        />
        <img
          src={stanford}
          alt="stanford logo"
          className="h-14 lg:h-auto"
        />
      </div>
      <div className="grid lg:grid-cols-5 grid-cols-1 gap-4 pb-32">
        <span className="bg-white h-96"></span>
        <span className="bg-white h-96"></span>
        <span className="bg-white h-96"></span>
        <span className="bg-white h-96"></span>
        <span className="bg-white h-96"></span>
      </div>
    </div>
  );
};

export default AdvisoryCouncil;
