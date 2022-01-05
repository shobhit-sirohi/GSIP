import React from "react";
import Card from "./Card";
import vector4 from "../images/vector4.svg";
import vector5 from "../images/vector5.svg";
import vector6 from "../images/vector6.svg";
import vector7 from "../images/vector7.svg";
const FourCards = () => {
  return (
    <div className=" md:px-10 2xl:px-20 px-4 bg-dotty bg-cover bg-no-repeat text-center  bg-newblue text-white pb-40  ">
      <h2 className=" font-semibold text-3xl  xl:text-4xl 2xl:text-5xl py-10 lg:py-20 ">
        The Global Scholar Internship Program
      </h2>
      <div className="grid lg:grid-cols-2 grid-cols-1  gap-10">
        <Card
          para="Exercise your minds through various workshops and develop skills that guide you for life."
          heading="Training"
          image={vector4}
        />
        <Card
          para="Improve your skills by working on projects and learning from previous interns mistakes."
          heading="Learning"
          image={vector5}
        />
        <Card
          para="Follow the steps of your allotted mentor; ask doubts and learn about the industry."
          heading="Mentorship"
          image={vector6}
        />
        <Card
          para="Present your work in the internship to a panel of judges and win cer- tificates from Harvard Student Agencies."
          heading="Final Presentation"
          image={vector7}
        />
      </div>
    </div>
  );
};

export default FourCards;
