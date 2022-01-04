import React from "react";
import logo from "../images/logo.jpeg";
const Navigation = () => {
  return (
    <div className="flex items-center justify-between pt-4 sticky top-0  px-4 md:px-10 md:pt-4 xl:px-20 bg-white">
      <a href="">
        <img
          src={logo}
          alt="logo"
          className="h-12 md:h-20 xl:h-24"
        />
      </a>
      <div className="lg:space-x-14 space-x-4 lg:text-2xl text-xs sm:text-base md:text-xl font-medium font-Poppins flex items-center text-newblue">
        <a href="">MEET THE MENTORS</a>
        <a href="">SCHEDULE</a>
      </div>
    </div>
  );
};

export default Navigation;
