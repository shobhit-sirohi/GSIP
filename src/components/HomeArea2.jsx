import React from "react";
import vector1 from "../images/vector1.svg";
import vector2 from "../images/vector2.svg";
import vector3 from "../images/vector3.svg";
const HomeArea2 = () => {
  return (
    <div className="bg-newgray flex flex-col h-auto text-center px-4 py-10 2xl:pb-20  md:px-10 xl:px-20 text-newblue ">
      <div className="flex justify-center">
        <h2 className="text-3xl 2xl:text-4xl font-medium lg:w-3/5 py-20 ">
          We are hand-picking interns from aross the world
          who are keen on developing an understanding of the
          professional world.
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-10 space-y-10 lg:space-y-0 2xl:gap-y-0 ">
        <span className="2xl:h-80 lg:h-60  text-xl 2xl:text-2xl order-1">
          Experience a life-changing opportunity of working
          under industry experts and leaders and learning
          from them.
        </span>
        <span className="2xl:h-80 lg:h-60  text-xl 2xl:text-2xl lg:order-2 order-3">
          We aim to foster the 3-Pillar foundation of
          Creativity, Activity, and Service(CAS) through our
          internships. You will be given a certificate for
          your CAS work based on the hours you put in during
          your internship.
        </span>
        <span className="2xl:h-80 lg:h-60  text-xl 2xl:text-2xl lg:order-3 order-5">
          The Global Scholar Internship Program is where
          high schoolers can put into practice their
          academic learnings and gain self-assurance.
        </span>
        <div className="bg-newblue flex flex-col p-4 2xl:h-80  lg:h-52 justify-between lg:order-4 order-2">
          <img
            src={vector1}
            className="2xl:h-32 h-28"
            alt="vector"
          />
          <h2 className="text-white text-2xl 2xl:text-4xl font-medium">
            Learn real-world skills
          </h2>
        </div>
        <div className="bg-newblue flex flex-col p-4 2xl:h-80  lg:h-52 justify-between lg:order-5 order-4">
          <img
            src={vector2}
            className="2xl:h-32 h-28"
            alt="vector"
          />
          <h2 className="text-white text-2xl 2xl:text-4xl font-medium">
            Work with best spearheads in business
          </h2>
        </div>
        <div className="bg-newblue flex flex-col p-4 2xl:h-80   lg:h-52 justify-between order-6 ">
          <img
            src={vector3}
            className="2xl:h-32 h-28"
            alt="vector"
          />
          <h2 className="text-white text-2xl 2xl:text-4xl font-medium">
            Take responsibilities and deliver on them
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HomeArea2;
