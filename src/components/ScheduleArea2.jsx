import React from "react";

const ScheduleArea2 = () => {
  return (
    <div className="bg-newgray px-4 md:px-10 2xl:px-20 text-center text-newblue flex flex-col justify-center items-center pt-4 pb-20">
      <h2 className="font-semibold text-3xl  2xl:text-4xl 3xl:text-5xl py-10 lg:w-4/5  ">
        The Global Scholar Internship Program is designed to
        give high school students an opportunity to specific
        skills by learning from experts and doing
        topic-specific projects.
      </h2>
      <p className="text-2xl 2xl:text-3xl 3xl:text-4xl">
        We are selecting students aged 13-17 for the
        program.
      </p>
      <div className="flex flex-col lg:flex-row lg:justify-between pt-10 space-y-10 lg:space-y-0 ">
        <div className="bg-newblue lg:w-5/12">
          <h2 className="text-2xl xl:text-3xl py-10 text-newyellow">
            Applicant Eligibility
          </h2>
          <p className="text-white text-2xl p-4">
            Seats are limited, and admission to the program
            is by selection only. Global Scholar Internship
            Program is open to students from grades 8th to
            12th.
          </p>
        </div>
        <div className="bg-newblue lg:w-5/12 ">
          <h2 className="text-2xl xl:text-3xl py-10 text-newyellow">
            Who Should Participate?
          </h2>
          <p className="text-white text-2xl p-4">
            Students from grades 8th to 12th who want to
            engage in experiential learning and learn from
            industry professionals directly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScheduleArea2;
