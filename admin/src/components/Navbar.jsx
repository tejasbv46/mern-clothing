/*import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Navbar = ({ setToken }) => {
  return (
    <div className="top-0 left-0 z-50 w-full transition-all duration-300 bg-gray-600 bg-opacity-50 shadow-lg backdrop-blur-md">
      <div className="flex items-center py-2 px-[4%] justify-between">
        <Link to={"/"}>
          <img className="w-44" src={assets.logo} alt="Trendify" />
        </Link>
        <button
          onClick={() => setToken("")}
          className="px-5 py-2 text-xs text-white bg-gray-800 rounded-full sm:px-7 sm:text-sm"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
*/
import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import ThemeToggleButton from "./ThemeToggleButton"; // 1. Import the button

const Navbar = ({ setToken }) => {
  return (
    <div className="top-0 left-0 z-50 w-full transition-all duration-300 bg-gray-600 bg-opacity-50 shadow-lg backdrop-blur-md">
      <div className="flex items-center py-2 px-[4%] justify-between">
        <Link to={"/"}>
          <img className="w-44" src={assets.logo} alt="Trendify" />
        </Link>
        <div className="flex items-center gap-4"> {/* 2. Create a container for the buttons */}
          <ThemeToggleButton /> {/* 3. Add the theme toggle button */}
          <button
            onClick={() => setToken("")}
            className="px-5 py-2 text-xs text-white bg-gray-800 rounded-full sm:px-7 sm:text-sm"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;