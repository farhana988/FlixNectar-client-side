// import React from 'react';

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          ` ${
            isActive
              ? "active text-[#536493] text-3xl font-extrabold"
              : "font-thin text-xl text-gray-400 hover:text-[#536493]"
          }`
        }
      >
        <i> Home</i>
      </NavLink>

      <NavLink
        to="/allMovies"
        className={({ isActive }) =>
          ` ${
            isActive
              ? "active text-[#536493] text-3xl font-extrabold"
              : "font-thin text-xl text-gray-400 hover:text-[#536493]"
          }`
        }
      >
        <i>All Movies</i>
      </NavLink>

      <NavLink
        to="/addMovie"
        className={({ isActive }) =>
          ` ${
            isActive
              ? "active text-[#536493] text-3xl font-extrabold"
              : "font-thin text-xl text-gray-400 hover:text-[#536493]"
          }`
        }
      >
        <i>Add Movie </i>
      </NavLink>

      <NavLink
        to="/myFavorites"
        className={({ isActive }) =>
          ` ${
            isActive
              ? "active text-[#536493] text-3xl font-extrabold"
              : "font-thin text-xl text-gray-400 hover:text-[#536493]"
          }`
        }
      >
        <i> My Favorites</i>
      </NavLink>
      <NavLink
        to="/extra"
        className={({ isActive }) =>
          ` ${
            isActive
              ? "active text-[#536493] text-3xl font-extrabold"
              : "font-thin text-xl text-gray-400 hover:text-[#536493]"
          }`
        }
      >
        <i> extra </i>
      </NavLink>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 fixed  backdrop-blur-xl bg-white/30 z-50 pt-3 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div id="logo" className="flex relative">
            <Link
              to="/"
              className="font-bold text-primary text-2xl md:text-3xl lg:text-5xl
           ml-10 z-10
         "
            >
              <> FlixNectar</>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-10">{links}</ul>
        </div>
        <div className="navbar-end ">
          <button className="btn bg-primary mx-4 text-white   lg:text-xl">
            Login
          </button>

          <button className="btn bg-primary mr-4 text-white   lg:text-xl">
            Reg
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
