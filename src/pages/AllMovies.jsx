// import React from 'react';

import { useLoaderData } from "react-router-dom";

import Heading from "../components/Heading";
import MovieCard from "../components/movieCard";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const AllMovies = () => {
  const data = useLoaderData();

  const [movies,setMovies] = useState(data)
  const [search, setSearch] = useState("");

  useEffect(()=>{
    fetch(`https://assi10-api.vercel.app/allMovie?searchParams=${search}`)
    .then((res)=> res.json())
    .then((data)=>{
      setMovies(data)
    })

  },[search])
 

  return (
    <div>
      {/* featured mpvies section */}
      <section className="container mx-auto pt-10">
        <Heading
          title={"All Movies"}
          subtitle={
            "Explore Our Movie Collection From blockbusters to classics, discover a wide variety of movies for every taste. Find your next favorite today!"
          }
        ></Heading>

        {/* search */}
        <div className="w-[500px] mx-auto mb-10 relative">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            name="search"
            placeholder="search by title"
            className="input input-bordered w-full  pl-14 rounded-xl"
            required
          />
          <FaSearch className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-500" /> 
        </div>


      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie._id}></MovieCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllMovies;
