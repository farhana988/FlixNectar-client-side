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
        className={`card card-compact h-[205px] md:h-[255px] lg:h-[330px]  shadow-xl shadow-primary ${
          isToggled ? "bg-[#ffffff] text-darkSlate" : "bg-card text-ivory"
        }`}
      >
        <figure>
          <img
            className="w-full h-24 md:h-32 lg:h-44  "
            referrerPolicy="no-referrer"
            src={posterImage}
            alt={title}
          />
        </figure>
        <div className="mx-3 lg:mx-5  flex flex-col flex-grow gap-1">
           {/* title */}
           <h2
            className="text-sm md:text-base lg:text-xl font-bold mt-3"
            title={title}
          >
            {title?.substring(0, 20)}
          </h2>
          {/* release date */}
          <p className="text-xs md:text-sm lg:text-base ">
           
            {releaseDate}
          </p>
          {/* description */}
          <p className="text-xs md:text-sm lg:text-base flex-grow opacity-70">
            {description?.substring(0,50)}
          </p>

         <div className="pb-3 lg:pb-5">
         <a
            href={trailerLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-xs md:text-sm lg:text-base"
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
