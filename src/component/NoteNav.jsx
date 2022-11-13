import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FiHome } from "react-icons/fi";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ToggleTheme from "../Event/ToggleComponent";

function NoteNav({ logout, name }) {
  return (
    <div className="header sticky top-0 z-50">
      <div className="flex items-center w-full justify-between lg:px-20 px-4 h-16 bg-indigo-600 text-white">
        <h2 className="font-bold text-2xl underline cursor-pointer">NoteApp</h2>
        <div className="">
          <ul className="flex text-2xl items-center lg:w-80 w-52 justify-between text-center">
            <div className="mx-2">
              <ToggleTheme />
            </div>
            <li className="">
              <Link to="/" className="a">
                <FiHome className="text-[18px]" />
              </Link>
            </li>
            <li className="mx-2">
              <Link to="/add" className="">
                <AiOutlinePlusCircle className="text-[18px]" />
              </Link>
            </li>
            <button
              onClick={logout}
              className="flex items-center justify-between w-auto border-2 border-slate-200 rounded-md px-2 lg:text-md text-[14px]"
            >
              {name}
              <HiArrowRightOnRectangle />
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
}

NoteNav.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default NoteNav;
