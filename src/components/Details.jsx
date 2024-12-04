// import React from 'react';

import { useLoaderData } from "react-router-dom";

const Details = () => {
    const movie = useLoaderData()
    const {photo, name, genre, duration, releaseYear, rating,summary } = movie
    return (
        <div>
            <div
      className="card card-compact  shadow-xl bg-white"
    >
      <figure>
        <img
          className="w-10/12  h-40 rounded-xl mt-8"
          src={ photo} 
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title ">{name}</h2>
        { genre}, {duration}, {releaseYear},rating: { rating}, 
        <br />
        {summary}
       
        
        <div className="card-actions justify-end">
          <button className="btn bg-primary text-white lg:text-xl">
            
          Delete Movie
          </button>
          <button className="btn bg-primary text-white lg:text-xl">
            
          Add to Favorite


          </button>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Details;