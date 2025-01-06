/* eslint-disable react/prop-types */
// import React from 'react';

import { Link } from "react-router-dom";

const DetailsCard = ({
  movie,
  validRating,
  isToggled,
  toggleSummary,
  handleDelete,
  handleAddTOFavorite,
  isExpanded,
  isFavorite,
}) => {
  const { _id, photo, name, genre, duration, releaseYear, summary } =
    movie;
  return (
    <div>
      <div
        className={`card card-compact shadow-xl shadow-primary mx-6 ${
          isToggled ? "bg-[#ffffff] text-darkSlate" : "bg-card text-ivory"
        }`}
      >
        <div className="flex flex-col lg:flex-row ">
          {/* image */}
          <figure>
            <img
              className="w-80 md:w-full lg:w-[800px] h-40 md:h-80 lg:h-96 rounded-xl m-7"
              src={photo}
              alt={name}
            />
          </figure>

          {/* details */}
          <div className="space-y-2 px-7 md:px-10 lg:px-0 lg:mt-20 mr-6">
            <section className="grid grid-cols-1  lg:gap-2  items-center">
              {/* title */}
              <h2 className="text-lg  lg:text-2xl font-bold">
                Title:
                <span className="text-lg font-semibold break-words">
                  {" "}
                  {name}
                </span>
              </h2>
              {/* genre */}
              <p className="text-base ">
                <span className=" font-semibold text-sm lg:font-bold lg:text-lg">
                  Genre:
                </span>{" "}
                {genre}
              </p>
            </section>

            <section className="grid  grid-cols-1 lg:gap-2 items-center">
              {/* duration */}
              <p className="text-base ">
                <span className="font-semibold text-sm lg:font-bold lg:text-lg">
                  Duration:
                </span>{" "}
                {duration} min
              </p>

              {/* release year */}
              <p className="text-base ">
                <span className="font-semibold text-sm lg:font-bold lg:text-lg">
                  Release Year:
                </span>{" "}
                {releaseYear}
              </p>
            </section>

            {/* rating */}
            <div className="flex items-center font-semibold text-sm lg:font-bold lg:text-lg">
              <span className="mr-2">Rating:</span>
              {[...Array(validRating)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  className=" w-5 h-5 lg:w-7 lg:h-7 text-yellow-400"
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
        </div>

        {/* Summary */}
        <div className="card-body">
          <div className=" px-6 space-y-4 ">
            <h2 className="text-3xl font-bold active">Summary</h2>
            <p className="break-words  text-lg opacity-50 font-semibold">
              {isExpanded ? summary : `${summary.slice(0, 396)}...`}
            </p>
            <button
              onClick={toggleSummary}
              className="text-blue-500 hover:underline"
            >
              {isExpanded ? "Show Less" : "Read More"}
            </button>
          </div>

          {/* buttons */}
          <div
            className="card-actions flex-col md:flex-row lg:flex-row 
          md:justify-around lg:justify-around 
          gap-5 items-end  pr-4 md:pr-0 lg:pr-0 py-2 md:py-6 lg:py-6"
          >
            <button
              onClick={handleDelete}
              className="btn bg-primary text-white lg:text-xl"
            >
              Delete Movie
            </button>

            <div className="bg-white rounded-xl">
              <button
                onClick={handleAddTOFavorite}
                className={"btn bg-primary text-white lg:text-xl"}
                disabled={isFavorite}
              >
                {isFavorite ? "Added to Favorites" : "Add to Favorite"}
              </button>
            </div>

            <button className="btn bg-primary text-white lg:text-xl">
              <Link to={`/update/${_id}`}> Update Movie</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
