// import React from 'react';

import { useLoaderData } from "react-router-dom";

import { useContext, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { ThemeContext } from "../../provider/ThemeProvider";
import Heading from "../../components/Shared/Heading";
import MovieCard from "./MovieCard";

const AllMovies = () => {
  const data = useLoaderData();
  const { isToggled } = useContext(ThemeContext);

  const [movies,setMovies] = useState(data)
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  

  useEffect(()=>{
    fetch(`https://assi10-api.vercel.app/allMovie?searchParams=${search}&sort=${sort}`)
    .then((res)=> res.json())
    .then((data)=>{
      setMovies(data)
    })

  },[search, sort])
 

  return (
    <div>
      {/* featured mpvie section */}
      <section className="container mx-auto py-10">
        <Heading
          title={"All Movies"}
          subtitle={
            "Explore Our Movie Collection From blockbusters to classics, discover a wide variety of movies for every taste. Find your next favorite today!"
          }
        ></Heading>

        {/* search */}
        <div className="w-96 lg:w-[500px] mx-auto mb-10 relative shadow-xl  rounded-xl">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            name="search"
            placeholder="search by title"
           
            className={`input input-bordered w-full active pl-14 rounded-xl ${isToggled?
              "text-darkSlate":"bg-[#5b5d5f88]  text-ivory"
            }`}
            required
          />
          <FaSearch className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400" /> 
        </div>
        {/* sort */}
        <div className="mb-5 ml-6 lg:ml-0">
            <select
             
              onChange={(e) => setSort(e.target.value)}
              className='border p-4 rounded-md'
              value={sort}
            >
              <option disabled selected value=''>Sort</option>
              <option value='dsc'>Descending Order</option>
              <option value='asc'>Ascending Order</option>
            </select>
          </div>


      {/* main card */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
         gap-6 px-5 lg:px-0">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie._id}></MovieCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllMovies;
