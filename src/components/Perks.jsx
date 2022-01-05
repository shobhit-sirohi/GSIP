import React from "react";
import vector8 from "../images/vector8.svg";
import vector9 from "../images/vector9.svg";
import vector10 from "../images/vector10.svg";
import vector11 from "../images/vector11.svg";
import vector12 from "../images/vector12.svg";
const Perks = () => {
  return (
    <div className="bg-dots h-auto lg:h-96 relative overflow-x-hidden">
      <h2 className="font-semibold text-3xl flex 2xl:text-4xl py-10 text-center justify-center text-newblue">
        Perks and beneits
      </h2>

      <div className=" xl:top-42  4xl:top-44 lg:top-36 3xl:top-44 bg-no-repeat lg:bg-line bg-contain bg-center h-10 absolute  w-screen z-10 "></div>
      <div className="lg:absolute bottom-10 z-20">
        <div className="grid lg:grid-cols-5 grid-cols-1  bg-no-repeat bg-center text-center justify-center items-start gap-y-10 gap-12 ">
          <span className="flex flex-col items-center justify-center">
            <img
              src={vector8}
              alt="vector"
              className="h-32  3xl:h-40"
            />
            <p className="text-xl 2xl:text-2xl pt-1 ">
              Certificate of Internship
            </p>
          </span>
          <span className="flex flex-col items-center ">
            <img
              src={vector9}
              alt="vector"
              className="h-32 3xl:h-40"
            />
            <p className="text-xl 2xl:text-2xl pt-1">
              Interaction opportunity with Ivy League
              faculty
            </p>
          </span>
          <span className="flex flex-col items-center ">
            <img
              src={vector10}
              alt="vector"
              className="h-32 3xl:h-40"
            />
            <p className="text-xl 2xl:text-2xl pt-1">
              Networking and mentorship opportunities
            </p>
          </span>
          <span className="flex flex-col items-center ">
            <img
              src={vector11}
              alt="vector"
              className="h-32 3xl:h-40"
            />
            <p className="text-xl 2xl:text-2xl pt-1">
              Letter of Recommendation
            </p>
          </span>
          <span className="flex flex-col items-center ">
            <img
              src={vector12}
              alt="vector"
              className="h-32 3xl:h-40"
            />
            <p className="text-xl 2x:text-2xl pt-1">
              Connect and work with a global team
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Perks;
