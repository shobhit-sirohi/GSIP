import React from "react";

const Selection = () => {
  return (
    <div className=" text-newblue ">
      <div
        className=" text-newblue hidden bg-hero5 bg-cover lg:bg-80 bg-right space-y-6 bg-white py-28  lg:flex flex-col bg-no-repeat px-4 md:px-10 2xl:px-20
       "
      >
        <h2 className="font-semibold text-5xl lg:text-5xl 2xl:text-6xl pt-4">
          Selection Process
        </h2>
        <span className="text-2xl 2xl:text-3xl 3xl-text-4xl lg:w-1/2 pt-10  font-medium ">
          <p>
            Interested high school students should submit an
            application. Shortlisted students will be going
            through an interview round before selection. We
            are looking for a selected cohort of students
            from across the world.
          </p>
        </span>
      </div>

      <div className="flex flex-col lg:hidden h-full ">
        <div className="flex flex-col  justify-center px-4 py-4 ">
          <h2 className="font-semibold text-4xl sm:text-6xl 3xl:text-7xl pt-2">
            Selection Process
          </h2>
          <span className="text-sm  sm:text-xl 3xl-text-2xl  font-medium pt-2 ">
            <p>
              Interested high school students should submit
              an application. Shortlisted students will be
              going through an interview round before
              selection. We are looking for a selected
              cohort of students from across the world.
            </p>
          </span>
        </div>
        <div className="bg-hero5 bg-cover  h-full bg-no-repeat bg-right "></div>
      </div>
    </div>
  );
};

export default Selection;
