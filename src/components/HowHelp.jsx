import React from "react";

const HowHelp = () => {
  return (
    <div className="md:px-10 2xl:px-20 px-4 bg-world bg-cover bg-no-repeat text-newblue text-center">
      <h2 className=" font-semibold text-3xl  2xl:text-4xl  py-10 ">
        How Does GSIP Help You?
      </h2>
      <p className="text-2xl lg:text-3xl 2xl:text-4xl ">
        Collaborate with intern partners to understand{" "}
        <br />
        flow-of-work, culture, and your responsibilities.
      </p>
      <div className="grid lg:grid-cols-3 grid-cols-1 py-10  lg:py-20 gap-12 lg:gap-20 ">
        <span className="bg-newblue text-white text-center">
          <p className="text-2xl 2xl:text-3xl py-10">
            Train to develop <br /> entrepreneurial skills
          </p>
        </span>
        <span className="bg-newblue text-white text-center">
          <p className="text-2xl 2xl:text-3xl py-10">
            Learn from Industry <br /> specific mentors
          </p>
        </span>
        <span className="bg-newblue text-white text-center">
          <p className="text-2xl 2xl:text-3xl py-10">
            Opportunity to learn <br /> from Harvard Mentors
          </p>
        </span>
        <span className="bg-newblue text-white text-center">
          <p className="text-2xl 2xl:text-3xl py-10">
            Find creative solutions <br /> to challenges
          </p>
        </span>
        <span className="bg-newblue text-white text-center">
          <p className="text-2xl 2xl:text-3xl py-10">
            Apply management and <br /> entrepreneurial
            skills at work
          </p>
        </span>
        <span className="bg-newblue text-white text-center">
          <p className="text-2xl 2xl:text-3xl py-10">
            Gain Career path Guidance
          </p>
        </span>
      </div>
    </div>
  );
};

export default HowHelp;
