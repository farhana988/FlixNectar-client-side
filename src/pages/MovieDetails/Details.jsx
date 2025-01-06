// import React from 'react';

import {  useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";

import { ThemeContext } from "../../provider/ThemeProvider";
import DetailsCard from "./DetailsCard";
import Heading from "../../components/Shared/Heading";

const Details = () => {
  const { user } = useContext(AuthContext);
  const { isToggled } = useContext(ThemeContext);
  const movie = useLoaderData();

  const { _id, photo, name, genre, duration, releaseYear, rating, summary } =
    movie;
  const validRating =
    typeof rating === "number" && !isNaN(rating) ? Math.floor(rating) : 0;
  const navigate = useNavigate();
  const email = user?.email;
  //  summary
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleSummary = () => setIsExpanded(!isExpanded);

  //  Add to Favorite
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    fetch(`https://assi10-api.vercel.app/favorites/${email}`)
      .then((res) => res.json())
      .then((favorites) => {
        // Check if the movie is in the favorites list
        const favoriteMovie = favorites.find((fav) => fav.movieId === _id);
        if (favoriteMovie) {
          setIsFavorite(true);
        }
      })
      .catch((err) => console.error("Error fetching favorites:", err));
  }, [_id, email]);

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assi10-api.vercel.app/movie/${_id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount === 1) {
              Swal.fire({
                title: "Deleted!",
                text: "Your movie has been deleted.",
                icon: "success",
              });
              navigate("/allMovies");
            } else {
              Swal.fire({
                title: "Error!",
                text: "Failed to delete the movie.",
                icon: "error",
                confirmButtonText: "Ok",
              });
            }
          })
          .catch(() => {
            Swal.fire({
              title: "Error!",
              text: "Something went wrong, please try again.",
              icon: "error",
              confirmButtonText: "Ok",
            });
          });
      }
    });
  };

  const handleAddTOFavorite = () => {
    if (isFavorite) return;
    const addFavorite = {
      photo,
      name,
      genre,
      duration,
      releaseYear,
      rating,
      summary,
      email,
      movieId: _id,
    };

    setIsFavorite(true);

    fetch("https://assi10-api.vercel.app/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addFavorite),
    })
      .then((res) => res.json())
      .then(() => {
        setIsFavorite(true);
        Swal.fire({
          title: "Added to Favorites!",
          text: "This movie is now in your favorites.",
          icon: "success",
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <div className="container mx-auto py-10">
      <Heading
        title={"Movie Details"}
        subtitle={
          "Explore everything you need to know about this film—genre, duration, released year, reviews, and more. Dive deeper into the story, discover behind-the-scenes insights, and get all the essential info to enhance your movie experience!"
        }
      ></Heading>

      <DetailsCard movie={movie}
      validRating ={validRating }
      isToggled={isToggled}
      toggleSummary={ toggleSummary}
      handleDelete={handleDelete}
      handleAddTOFavorite={handleAddTOFavorite}
      isExpanded={isExpanded}
      isFavorite={isFavorite}
      ></DetailsCard>
    </div>
  );
};

export default Details;
