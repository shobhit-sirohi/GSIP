import React from "react";
import Deadline from "../components/Deadline";
import Hero2 from "../components/Hero2";
import Navigation from "../components/Navigation";
import ProgramFee from "../components/ProgramFee";
import ScheduleArea2 from "../components/ScheduleArea2";
import ScheduleGrid from "../components/ScheduleGrid";
import Selection from "../components/Selection";

const Schedule = () => {
  return (
    <div className="mx-auto 2xl:max-w-3000">
      <Navigation />
      <Hero2 />
      <ScheduleArea2 />
      <Deadline />
      <Selection />
      <ProgramFee />
      <ScheduleGrid />
    </div>
  );
};

export default Schedule;
