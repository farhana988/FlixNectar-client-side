// import React from 'react';

import {  useLoaderData } from "react-router-dom";

import FavoriteCard from "../components/FavoriteCard";
import Heading from "../components/Heading";
import { useState } from "react";

const MyFavorites = () => {
    const favorites = useLoaderData()
   
    const[loadedFavorite, setLoadedFavorite]=useState(favorites)



    return (
        <div className="container mx-auto">
          <Heading
          title={'my'}
          subtitle={'kk'}
          ></Heading>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {loadedFavorite.map((favorite) => (
           <FavoriteCard
           favorite={favorite}
              loadedFavorite={loadedFavorite}
              setLoadedFavorite={setLoadedFavorite}
              key={favorite._id}
            ></FavoriteCard>
          ))}
          
        </div>
        
        </div>
    );
};

export default MyFavorites;