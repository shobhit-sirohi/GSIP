import React from "react";

const ScheduleGrid = () => {
  return (
    <div className="px-4 md:px-10 xl:px-20 bg-newblue bg-whiteworld bg-cover bg-no-repeat pb-20 ">
      <h2 className="font-semibold text-5xl  xl:text-5xl 2xl:text-6xl py-20 text-white text-center">
        Schedule
      </h2>
      <div className="text-newblue  flex justify-center items-center  pb-20 ">
        <span className="text-2xl bg-newyellow lg:text-4xl xl:tetx-5xl font-semibold py-6 px-14">
          3 Weeks Program
        </span>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-1 lg:grid-rows-2 grid-rows-3  gap-10 ">
        <div className="bg-white lg:col-span-2 flex flex-col   ">
          <div className="">
            <span className="text-2xl text-newblue bg-gradient-to-r h-auto  from-newyellow flex to-white lg:text-4xl xl:tetx-5xl font-semibold py-6 px-14">
              Week 1
            </span>
          </div>
          <div className="p-4">
            <ul className="list-disc text-newblue font-medium text-xl lg:text-2xl space-y-4 pl-4">
              <li className="">
                {" "}
                5th February 2022 08:00 AM - 09:00 AM EDT
                Orientation
              </li>
              <li>
                {" "}
                6th February 2022 08:00 AM - 09:30 AM EDT
                Workshop on Business and Idea Generation
                from HSA
              </li>
              <li>
                {" "}
                7th - 11th February 2022 Internship Task 1
                (5-7 hours for the whole week)
              </li>
              <li>
                {" "}
                12th February 2022 08:00 AM - 09:00 AM EDT
                Networking Session
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-white lg:col-span-2 flex flex-col  ">
          <div className="">
            <span className="text-2xl text-newblue bg-gradient-to-r h-auto  from-newyellow flex to-white lg:text-4xl xl:tetx-5xl font-semibold py-6 px-14">
              Week 2
            </span>
          </div>
          <div className="p-4">
            <ul className="list-disc pl-4 text-newblue font-medium text-xl lg:text-2xl space-y-4 ">
              <li className="">
                {" "}
                13th February 2022 08:00 AM - 09:30 AM EDT
                Workshop on Business Plan Writing from HSA
              </li>
              <li>
                {" "}
                14th - 18th February 2022 Internship Task 2
                (5-7 hours for the whole week)
              </li>
              <li>
                {" "}
                19th February 2022 08:00 AM - 09:00 AM EDT
                Mentorship Day
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-white  lg:col-start-2 lg:col-span-2 flex flex-col  ">
          <div className="">
            <span className="text-2xl text-newblue bg-gradient-to-r h-auto  from-newyellow flex to-white lg:text-4xl xl:tetx-5xl font-semibold py-6 px-14">
              Week 3
            </span>
          </div>
          <div className="p-4">
            <ul className="list-disc pl-4 text-newblue font-medium text-xl lg:text-2xl space-y-4 ">
              <li className="">
                {" "}
                20th February 2022 08:00 AM - 09:30 AM EDT
                Workshop on Public Speaking and Presentation
                Skills from HSA
              </li>
              <li>
                {" "}
                21st - 25th February 2022 Internship Task 3
                (5-7 hours for the whole week)
              </li>
              <li>
                {" "}
                26thth February 2022 08:00 AM - 10:00 AM EDT
                Final Presentations and Conclusion Day
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleGrid;
