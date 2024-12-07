// import React from 'react';

import { useLoaderData } from "react-router-dom";

import FavoriteCard from "../components/FavoriteCard";
import Heading from "../components/Heading";
import { useState } from "react";
import { TfiFaceSad } from "react-icons/tfi";

const MyFavorites = () => {
  const favorites = useLoaderData();

  const [loadedFavorite, setLoadedFavorite] = useState(favorites);

  return (
    <div className="container mx-auto  py-10">
      <Heading
        title={"My Favorite Films"}
        subtitle={
          "Here’s a collection of movies that have left a lasting impact on me. Whether its the storytelling, characters, or visuals, these films hold a special place in my heart."
        }
      ></Heading>

      {loadedFavorite.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 lg:px-0">
          {loadedFavorite.map((favorite) => (
            <FavoriteCard
              favorite={favorite}
              loadedFavorite={loadedFavorite}
              setLoadedFavorite={setLoadedFavorite}
              key={favorite._id}
            ></FavoriteCard>
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-5 my-40 active
        text-xl md:text-2xl lg:text-4xl font-bold">
          <TfiFaceSad className="text-9xl " />
          <p className="opacity-50">No favorites found.</p>
          <p className="opacity-50">Start adding some movies to your list!</p>
        </div>
      )}
    </div>
  );
};

export default MyFavorites;
