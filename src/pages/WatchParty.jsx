// import React from 'react';

import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Heading from "../components/Heading";

const WatchParty = () => {
  const movies = useLoaderData() ;

  const [randomMovies, setRandomMovies] = useState([]);

  const getRandomViewers = () => Math.floor(Math.random() * 500) + 1;

  const getRandomMovies = (moviesList) => {
    const shuffledMovies = [...moviesList].sort(() => 0.5 - Math.random());
    return shuffledMovies.slice(0, 2);
  };

  useEffect(() => {
    const selectedMovies = getRandomMovies(movies);
    setRandomMovies(selectedMovies);
  }, [movies]);

  return (
    <div>
      <Heading title={"Watch Party"} subtitle={"aa"}></Heading>
      <div className=" bg-white flex justify-center items-center ">
        <div className="grid  gap-8 ">
          {randomMovies.map((movie, index) => (
            <div key={index} className=" w-[900px] shadow-xl p-6 rounded-xl">
              <div className="flex gap-5 ">
                <figure>
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-[600px] h-72 object-cover -400 rounded-lg"
                  />
                </figure>
                <div className="mt-10 space-y-5">
                  <h2 className="card-title text-xl font-semibold ">
                    {movie.title}
                  </h2>
                  <p className="">Watching: {getRandomViewers()} people</p>
                  <div className="card-actions ">
                    <a
                      href={movie.discordLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Join Watch Party
                    </a>
                  </div>
                </div>
              </div>
                <div className="card-body space-y-2">
                  <h2 className="text-center w-72">Comments</h2>
                  {movie.comments?.map((comment, idx) => (
                    <p key={idx} className="text-sm italic ">
                      {comment}
                    </p>
                  ))}
                </div>
              </div>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default WatchParty;
