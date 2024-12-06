// import React from 'react';

import { useEffect, useState } from "react";
import Heading from "./Heading";
import UpcomingCard from "./UpcomingCard";
import { Link } from "react-router-dom";

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
      <Heading
        title={"Upcoming Releases"}
        subtitle={
          "Get ready for the latest must-see films! From highly anticipated blockbusters to fresh, exciting stories, our upcoming releases are sure to keep you on the edge of your seat. Stay tuned for what’s next in the world of cinema!"
        }
      ></Heading>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 lg:px-0">
        {movies.slice(0, 3).map((movie) => (
          <UpcomingCard key={movie.id} movie={movie} />
        ))}
      </div>

      <div className="flex justify-end mt-4  ">
        <button
          className=" mr-7 lg:mr-0
             btn bg-primary ring-2 ring-offset-4 ring-primary text-white lg:text-xl mt-5"
        >
          <Link to="/allUpcoming">Show More</Link>
        </button>
      </div>
    </div>
  );
};

export default Upcoming;
