// import React from 'react';

import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Heading from "../components/Heading";
import { ThemeContext } from "../provider/ThemeProvider";

const WatchParty = () => {
  const movies = useLoaderData();

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

  const { isToggled } = useContext(ThemeContext);
  return (
    <div className=" py-10">
      <Heading
        title={"Watch Party"}
        subtitle={
          "Let’s watch and enjoy great films together! Pick a movie, grab some snacks, and let’s share the experience. Feel free to invite others and make it a fun, interactive movie night!"
        }
      ></Heading>

      <div className=" flex justify-center items-center">
        <div className="grid  gap-12 ">
          {randomMovies.map((movie, index) => (
            <div
              key={index}
              className={`card card-compact w-[390px] md:w-[730px] lg:w-[900px] shadow-xl p-8 shadow-primary ${
                isToggled ? "bg-[#ffffff] text-darkSlate" : "bg-card text-ivory"
              }`}
            >
              <div className="flex flex-col md:flex-row lg:flex-row gap-6 ">
                <figure>
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className=" w-96 md:w-[450px] lg:w-[600px] h-72 object-cover rounded-xl"
                  />
                </figure>
                <div className="mt-10 space-y-5">
                  <h2 className="card-title text-lg  lg:text-xl font-bold ">
                    {movie.title}
                  </h2>
                  <p className="opacity-50 font-semibold">Watching: {getRandomViewers()} people</p>
                  <div className="card-actions ">
                    <a
                      href={movie.discordLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn bg-primary text-ivory lg:text-lg"
                    >
                      Join Watch Party
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body space-y-2">
                <h2 className="text-center w-72 text-xl font-bold active">Comments</h2>
                {movie.comments?.map((comment, idx) => (
                  <p key={idx} className="text-sm font-semibold italic opacity-50">
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
