import React from "react";

const Deadline = () => {
  return (
    <div className="flex flex-col justify-center items-center px-4 md:px-10 2xl:px-20 text-newblue bg-dots pb-20">
      <h2 className="font-semibold text-3xl  2xl:text-4xl  py-10">
        Application Deadline & Process
      </h2>
      <p className="text-2xl lg:text-3xl 2xl:text-3xl lg:text-center pb-10">
        Students are encouraged to apply as early as
        possible. Applications are processed on a rolling
        basis and will be assessed as they get submitted. An
        application will not be reviewed until all
        application materials are received by us.
      </p>
      <a
        href=""
        className="bg-newyellow font-semibold flex justify-center text-2xl 2xl:text-3xl hover:text-white py-1 2xl:py-4 px-4  "
      >
        Early Application Deadline (Cohort 2): 10th February
        2022
      </a>
    </div>
  );
};

export default Deadline;
