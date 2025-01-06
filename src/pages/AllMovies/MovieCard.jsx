/* eslint-disable react/prop-types */
// import React from 'react';

import { Link } from "react-router-dom";

import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../provider/ThemeProvider";

const MovieCard = ({ movie }) => {
  const { _id, photo, name, genre, duration, rating } = movie;
  const validRating =
    typeof rating === "number" && !isNaN(rating) ? Math.floor(rating) : 0;
  const { isToggled } = useContext(ThemeContext);

  // Convert duration to hours, minutes, and seconds
  const hours = Math.floor(duration / 60);
  const minutes = Math.floor(duration % 60);
  const formattedDuration = `${hours > 0 ? `${hours}h ` : ""}${
    minutes > 0 ? `${minutes}m` : ""
  }`;

  // title length adjust
  const [titleLength, setTitleLength] = useState(20);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setTitleLength(10);
      } else {
        setTitleLength(20);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  

  return (
    <div>
      <div
        className={`card card-compact h-[205px] md:h-[255px] lg:h-[330px] flex flex-col justify-between shadow-xl
           shadow-primary  ${
             isToggled ? "bg-[#ffffff] text-darkSlate" : "bg-card text-ivory"
           }`}
      >
        {/* card image */}
        <figure>
          <img
            className="w-full h-24 md:h-32 lg:h-44  "
            src={photo}
            alt={name}
          />
        </figure>
        {/* card text */}
        <div className="mx-5 relative">
          {/* title */}
          <h2
            className="text-sm md:text-base lg:text-xl font-bold mt-3"
            title={name}
          >
            {name?.substring(0, titleLength)}
          </h2>

          {/* Genre */}
          <p className="text-xs md:text-sm lg:text-base " title={genre}>
            {genre?.substring(0, 20)}
          </p>

          {/* duration */}
          <div
            className="badge lg:badge-lg  badge-outline bg-primary 
           text-white absolute -top-20 md:-top-28 lg:-top-40 -right-2 "
          >
            {formattedDuration}
          </div>

          {/* rating */}
          <div className="flex items-center">
            {[...Array(validRating)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 lg:w-7 lg:h-7 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 15.27l-6.18 3.63 1.64-7.03L.46 6.93l7.19-.61L10 0l2.35 6.31 7.19.61-5.99 4.94 1.64 7.03L10 15.27z"
                  clipRule="evenodd"
                />
              </svg>
            ))}
          </div>
        </div>

        {/* btn */}
        <div className="card-actions justify-end pr-3 lg:pr-7 pb-3 lg:pb-6 mt-auto">
          <button className="btn btn-xs md:btn-sm bg-primary text-white lg:text-xl">
            <Link to={`/details/${_id}`}> See Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
