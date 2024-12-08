/* eslint-disable react/prop-types */
// import React from 'react';

import { Link } from "react-router-dom";
import { ThemeContext } from "../provider/ThemeProvider";
import { useContext } from "react";

const MovieCard = ({ movie }) => {
  const { _id, photo, name, genre, duration, releaseYear, rating } = movie;
  const validRating =
    typeof rating === "number" && !isNaN(rating) ? Math.floor(rating) : 0;
  const { isToggled } = useContext(ThemeContext);

  return (
    <div>
      <div
        className={`card card-compact h-[480px] flex flex-col justify-between shadow-xl shadow-primary  ${
          isToggled ? "bg-[#ffffff] text-darkSlate" : "bg-card text-ivory"
        }`}
      >
        <figure>
          <img
            className="w-10/12 h-40 rounded-xl mt-7"
            src={photo}
            alt={name}
          />
        </figure>
        <div className="mx-7 flex-grow">
          <h2 className="text-lg lg:text-2xl font-bold mt-3">
            Title:  
            <span className="text-lg font-semibold break-words">  {name}</span>
          </h2>

          <p className="text-base ">
            <span className="font-semibold text-sm lg:font-bold lg:text-lg">
              Genre:
            </span> {genre}
          </p>
          
          <p className="text-base ">
            <span className="font-semibold text-sm lg:font-bold lg:text-lg">
              Duration:
            </span> {duration} min
          </p>

          <p className="text-base ">
            <span className="font-semibold text-sm lg:font-bold lg:text-lg">
              Release Year:
            </span>{" "}
            {releaseYear}
          </p>

          <div className="flex items-center font-semibold text-sm lg:font-bold lg:text-lg">
            <span className="mr-2">Rating:</span> 
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


        <div className="card-actions justify-end pr-7 py-6 mt-auto">
          <button className="btn bg-primary text-white lg:text-xl">
            <Link to={`/details/${_id}`}> See Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
