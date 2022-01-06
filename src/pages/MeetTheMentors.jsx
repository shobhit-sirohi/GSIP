import React from "react";
import Navigation from "../components/Navigation";
import Hero2 from "../components/Hero2";
import MentorGrid from "../components/MentorGrid";

const MeetTheMentors = () => {
  return (
    <div className="mx-auto  2xl:max-w-3000">
      <Navigation />
      <Hero2 />
      <MentorGrid />
    </div>
  );
};

export default MeetTheMentors;
