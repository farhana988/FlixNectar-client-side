// import React from 'react';

import { useEffect, useState } from "react";

import UpcomingCard from "./UpcomingCard";
import Heading from "../Shared/Heading";




const AllUpcoming = () => {
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
        <div className="container mx-auto py-10">
        <Heading
          title={"All Upcoming Releases"}
          subtitle={
            "Get ready for the latest must-see films! From highly anticipated blockbusters to fresh, exciting stories, our upcoming releases are sure to keep you on the edge of your seat. Stay tuned for what’s next in the world of cinema!"
          }
        ></Heading>
  
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-5 lg:px-0">
          {movies.map((movie) => (
            <UpcomingCard key={movie.id} movie={movie} />
          ))}
        </div>
  
       
      </div>
    );
};

export default AllUpcoming;