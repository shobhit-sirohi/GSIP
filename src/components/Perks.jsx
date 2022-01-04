import React from "react";
import vector8 from "../images/vector8.svg";
import vector9 from "../images/vector9.svg";
import vector10 from "../images/vector10.svg";
import vector11 from "../images/vector11.svg";
import vector12 from "../images/vector12.svg";
const Perks = () => {
  return (
    <div className="bg-dots h-auto ">
      <h2 className="font-semibold text-3xl flex xl:text-4xl 2xl:text-5xl py-20 text-center justify-center text-newblue">
        Perks and beneits
      </h2>

      <div className="  grid lg:grid-cols-5 grid-cols-1 bg-no-repeat bg-center text-center justify-center items-center gap-y-10 gap-12 pb-20">
        <span className="flex flex-col items-center justify-center">
          <img
            src={vector8}
            alt="vector"
            className="h-40 lg:h-56"
          />
          <p className="text-xl lg:text-2xl pt-1">
            Certificate of Internship
          </p>
        </span>
        <span className="flex flex-col items-center ">
          <img
            src={vector9}
            alt="vector"
            className="h-40 lg:h-56"
          />
          <p className="text-xl lg:text-2xl pt-1">
            Interaction opportunity with Ivy League faculty
          </p>
        </span>
        <span className="flex flex-col items-center ">
          <img
            src={vector10}
            alt="vector"
            className="h-40 lg:h-56"
          />
          <p className="text-xl lg:text-2xl pt-1">
            Networking and mentorship opportunities
          </p>
        </span>
        <span className="flex flex-col items-center ">
          <img
            src={vector11}
            alt="vector"
            className="h-40 lg:h-56"
          />
          <p className="text-xl lg:text-2xl pt-1">
            Letter of Recommendation
          </p>
        </span>
        <span className="flex flex-col items-center ">
          <img
            src={vector12}
            alt="vector"
            className="h-40 lg:h-56"
          />
          <p className="text-xl lg:text-2xl pt-1">
            Connect and work with a global team
          </p>
        </span>
      </div>
    </div>
  );
};

export default Perks;
