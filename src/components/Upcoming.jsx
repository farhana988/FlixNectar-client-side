// import React from 'react';

import { useEffect, useState } from "react";
import Heading from "./Heading";

const Upcoming = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
   
    const fetchMovies = async () => {
      const response = await fetch("./upcoming.json");
      const data = await response.json();
      setMovies(data);
    };

    fetchMovies();
  }, []);
  return (
    <div className="container mx-auto">
      <Heading title={"Upcoming Releases"} subtitle={"Get ready for the latest must-see films! From highly anticipated blockbusters to fresh, exciting stories, our upcoming releases are sure to keep you on the edge of your seat. Stay tuned for what’s next in the world of cinema!"}></Heading>
      <div className=" py-8">
       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="p-4 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={movie.posterImage}
                alt={movie.title}
                className="w-full rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-4">{movie.title}</h3>
              <p className="text-gray-600 mb-4">
                Release Date: {movie.releaseDate}
              </p>
              <p className="text-gray-600 mb-4">{movie.description}</p>
              <a
                href={movie.trailerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Watch Trailer
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
