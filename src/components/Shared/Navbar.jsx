// import React from 'react';

import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { ThemeContext } from "../../provider/ThemeProvider";
import Theme from "./Theme";
import "./Navbar.css";

const Navbar = () => {
  const { user, handleSignOut } = useContext(AuthContext);
  const { isToggled } = useContext(ThemeContext);
  const links = (
    <>
      {/* home */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${
            isActive
              ? `active text-2xl font-extrabold ${
                  isToggled ? "text-primary" : "text-ivory"
                }`
              : `font-thin text-lg ${
                  isToggled
                    ? "text-gray-400 hover:text-primary"
                    : "text-ivory hover:text-primary"
                }`
          }`
        }
      >
        <i>Home</i>
      </NavLink>

      {/* all movies */}
      <NavLink
        to="/allMovies"
        className={({ isActive }) =>
          `${
            isActive
              ? `active text-2xl font-extrabold ${
                  isToggled ? "text-primary" : "text-ivory"
                }`
              : `font-thin text-lg ${
                  isToggled
                    ? "text-gray-400 hover:text-primary"
                    : "text-ivory hover:text-primary"
                }`
          }`
        }
      >
        <i>All Movies</i>
      </NavLink>

      {/* add movies */}
      {user && (
        <NavLink
          to="/addMovie"
          className={({ isActive }) =>
            `${
              isActive
                ? `active text-2xl font-extrabold ${
                    isToggled ? "text-primary" : "text-ivory"
                  }`
                : `font-thin text-lg ${
                    isToggled
                      ? "text-gray-400 hover:text-primary"
                      : "text-ivory hover:text-primary"
                  }`
            }`
          }
        >
          <i>Add Movie </i>
        </NavLink>
      )}

      {/* my Added movies */}
      {user && (
        <NavLink
          to={`/myAddedMovies/${user.email}`}
          className={({ isActive }) =>
            `${
              isActive
                ? `active text-2xl font-extrabold ${
                    isToggled ? "text-primary" : "text-ivory"
                  }`
                : `font-thin text-lg ${
                    isToggled
                      ? "text-gray-400 hover:text-primary"
                      : "text-ivory hover:text-primary"
                  }`
            }`
          }
        >
          <i>My Added Movies </i>
        </NavLink>
      )}

      {/* my favorites */}
      {user && (
        <NavLink
          to={`/myFavorites/${user.email}`}
          className={({ isActive }) =>
            `${
              isActive
                ? `active text-2xl font-extrabold ${
                    isToggled ? "text-primary" : "text-ivory"
                  }`
                : `font-thin text-lg ${
                    isToggled
                      ? "text-gray-400 hover:text-primary"
                      : "text-ivory hover:text-primary"
                  }`
            }`
          }
        >
          <i> My Favorites</i>
        </NavLink>
      )}

      {/* watch party */}
      <NavLink
        to="/watch"
        className={({ isActive }) =>
          `${
            isActive
              ? `active text-2xl font-extrabold ${
                  isToggled ? "text-primary" : "text-ivory"
                }`
              : `font-thin text-lg ${
                  isToggled
                    ? "text-gray-400 hover:text-primary"
                    : "text-ivory hover:text-primary"
                }`
          }`
        }
      >
        <i>Watch Party</i>
      </NavLink>

      {/* About us */}
      <NavLink
        to="/aboutUs"
        className={({ isActive }) =>
          `${
            isActive
              ? `active text-2xl font-extrabold ${
                  isToggled ? "text-primary" : "text-ivory"
                }`
              : `font-thin text-lg ${
                  isToggled
                    ? "text-gray-400 hover:text-primary"
                    : "text-ivory hover:text-primary"
                }`
          }`
        }
      >
        <i>About us</i>
      </NavLink>

      {/* Contact */}
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `${
            isActive
              ? `active text-2xl font-extrabold ${
                  isToggled ? "text-primary" : "text-ivory"
                }`
              : `font-thin text-lg ${
                  isToggled
                    ? "text-gray-400 hover:text-primary"
                    : "text-ivory hover:text-primary"
                }`
          }`
        }
      >
        <i>Contact</i>
      </NavLink>

      {/*  Support  */}
      <NavLink
        to="/support"
        className={({ isActive }) =>
          `${
            isActive
              ? `active text-2xl font-extrabold ${
                  isToggled ? "text-primary" : "text-ivory"
                }`
              : `font-thin text-lg ${
                  isToggled
                    ? "text-gray-400 hover:text-primary"
                    : "text-ivory hover:text-primary"
                }`
          }`
        }
      >
        <i> Support </i>
      </NavLink>
    </>
  );
  return (
    <div>
      <div className="navbar fixed  backdrop-blur-xl bg-white/30 z-50 pt-3 lg:px-20">
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
              className={`menu menu-sm dropdown-content ${isToggled} ? 
                "bg-white text-darkSlate" : "bg-base-100 text-ivory"
                   rounded-box z-[1] mt-3 w-52 p-2 shadow`}
            >
              {links}
            </ul>
          </div>
          <div id="logo" className="flex relative">
            <Link
              to="/"
              className={`font-bold text-2xl md:text-3xl lg:text-4xl z-10 
                ${isToggled ? "text-primary" : "text-ivory"}`}
            >
              <>
                <i className="lg:text-5xl">F</i>
                <i className="lg:text-2xl lg:absolute lg:top-6 lg:left-2">
                  lix
                </i>
                <i className="lg:absolute lg:-top-3">N</i>
                <i className="lg:text-2xl lg:absolute lg:top-3 lg:left-10">
                  ectar
                </i>
              </>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 items-center">
            {links}
          </ul>
        </div>
        <div className="navbar-end items-center">
          {user?.email ? (
            <div className="flex gap-3 justify-center items-center">
              {/* profile info */}
              <div className="user-info relative ">
                <img
                  src={user.photoURL}
                referrerPolicy="no-referrer"
                  alt=""
                  className="ring-2 ring-offset-4 ring-primary w-7 h-7 
                  lg:w-10 lg:h-10 rounded-full"
                />
                <div
                  className="user-name absolute bottom--10 left-0 w-full text-xs  text-center
                    font-semibold p-2 rounded opacity-0 transition-opacity duration-300"
                >
                  {user.displayName}
                </div>
              </div>
              {/* logout btn */}
              <button className="" onClick={handleSignOut}>
                {/* logout svg */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="log-svg"
                >
                  <g fill="currentColor">
                    <path d="M13 4.009a1 1 0 1 0-2 0l-.003 8.003a1 1 0 0 0 2 0z" />
                    <path d="M4 12.992c0-2.21.895-4.21 2.343-5.657l1.414 1.414a6 6 0 1 0 8.485 0l1.415-1.414A8 8 0 1 1 4 12.992" />
                  </g>
                </svg>
              </button>
            </div>
          ) : (
            <div>
              {/* log in btn */}
              <NavLink to="/login">
                <button className="pt-1 ">
                  {/* log in svg */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="log-svg"
                  >
                    <g fill="currentColor">
                      <path d="M15.486 20h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4v2h4v12h-4z" />
                      <path d="m10.158 17.385l-1.42-1.408l3.92-3.953H3.513a1 1 0 1 1 0-2h9.163l-3.98-3.947l1.408-1.42l6.391 6.337z" />
                    </g>
                  </svg>
                </button>
              </NavLink>
            </div>
          )}
          <Theme></Theme>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
