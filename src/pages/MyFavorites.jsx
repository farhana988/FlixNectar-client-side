// import React from 'react';

import {  useLoaderData } from "react-router-dom";

import FavoriteCard from "../components/FavoriteCard";
import Heading from "../components/Heading";

const MyFavorites = () => {
    const favorites = useLoaderData()
    console.log(favorites)
    return (
        <div>
          <Heading
          title={'my'}
          subtitle={'kk'}
          ></Heading>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {favorites.map((favorite) => (
           <FavoriteCard
           favorite={favorite}
              
              key={favorite._id}
            ></FavoriteCard>
          ))}
          
        </div>
        
        </div>
    );
};

export default MyFavorites;