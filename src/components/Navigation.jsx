import React from "react";
import logo from "../images/logo.jpeg";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <nav className="flex items-center justify-between pt-4 sticky top-0 px-4 md:px-10 md:pt-4 2xl:px-20 bg-white">
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          className="h-12 md:h-14 2xl:h-20"
        />
      </Link>
      <ul className="lg:space-x-14 space-x-4 2xl:text-2xl text-xs sm:text-base md:text-xl font-medium font-Poppins flex items-center text-newblue">
        <Link to="/meet-the-mentors">
          <li className="hover:text-newyellow">
            MEET THE MENTORS
          </li>
        </Link>
        <Link to="/schedule">
          <li className="hover:text-newyellow">SCHEDULE</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
