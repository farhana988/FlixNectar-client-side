/* eslint-disable react/prop-types */
// import React from 'react';

import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { _id, photo, name, genre, duration, releaseYear, rating } = movie;
  const validRating = typeof rating === "number" && !isNaN(rating) ? Math.floor(rating) : 0;

  return (
    <div>
      <div className="card shadow-xl border">
        <figure>
          <img
            className="w-10/12  h-40 rounded-xl mt-8"
            src={photo}
            alt={name}
          />
        </figure>
        <div className="card-body">
        <h2 className="card-title text-xl font-semibold ">{name}</h2>
        <p className="text-sm mt-2">
            <span className="font-semibold">Genre:</span> {genre}
          </p>
          <p className="text-sm ">
            <span className="font-semibold">Duration:</span> {duration} min
          </p>
          
          <p className="text-sm ">
            <span className="font-semibold">Release Year:</span> {releaseYear}
          </p>
          
          
           
          <div className="flex items-center mt-2">
            {[...Array(validRating)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-yellow-400"
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



          <div className="card-actions justify-end">
            <button className="btn bg-primary text-white lg:text-xl">
              <Link to={`/details/${_id}`}> See Details</Link>
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default MovieCard;
