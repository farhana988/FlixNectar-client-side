/* eslint-disable react/prop-types */
// import React from 'react';

import { useContext } from "react";
import { ThemeContext } from "../../provider/ThemeProvider";


const UpcomingCard = ({ movie }) => {
  const { isToggled } = useContext(ThemeContext);

  const { posterImage, title, releaseDate, description, trailerLink } = movie;
  return (
    <div >
      <div
        className={`card card-compact h-[450px] shadow-xl shadow-primary ${
          isToggled ? "bg-[#ffffff] text-darkSlate" : "bg-card text-ivory"
        }`}
      >
        <figure>
          <img
            className="  w-10/12 h-40 rounded-xl mt-7"
            src={posterImage}
            alt={title}
          />
        </figure>
        <div className="px-8 flex flex-col flex-grow gap-1">
          <h2
            className="text-lg  lg:text-2xl font-bold mt-3
          
          "
          >
            Title:
            <span> {title}</span>
          </h2>
          <p className="text-base ">
            <span
              className=" font-semibold text-sm lg:font-bold lg:text-lg
            
            "
            >
              Release Date:
            </span>
            {releaseDate}
          </p>
          <p className="text-base flex-grow">
            <span
              className="font-semibold text-sm lg:font-bold lg:text-lg
            
            "
            >
              Description:
            </span>
            {description}
          </p>

         <div className="pb-5">
         <a
            href={trailerLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline "
          >
            Watch Trailer
          </a>
         </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingCard;
