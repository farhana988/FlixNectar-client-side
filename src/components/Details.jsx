// import React from 'react';

import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import Heading from "./Heading";
import { ThemeContext } from "../provider/ThemeProvider";

const Details = () => {
  const { user } = useContext(AuthContext);
  const { isToggled } = useContext(ThemeContext);
  const movie = useLoaderData();

  const { _id, photo, name, genre, duration, releaseYear, rating, summary } =
    movie;
  const validRating =
    typeof rating === "number" && !isNaN(rating) ? Math.floor(rating) : 0;
  const navigate = useNavigate();
  const email = user.email;
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
      confirmButtonText: "Yes, delete it!"
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
                icon: "success"
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

      <div
        className={`card card-compact shadow-xl shadow-primary mx-6 ${
          isToggled ? "bg-[#ffffff] text-darkSlate" : "bg-card text-ivory"
        }`}
      >
        <div className="flex flex-col lg:flex-row lg:gap-10">
          {/* image */}
          <figure>
            <img
              className=" w-[800px] h-96 rounded-xl m-7"
              src={photo}
              alt={name}
            />
          </figure>

          {/* details */}
          <div className="space-y-2 pl-10 md:px-20 lg:px-0 lg:mt-20">
            <section className="grid  grid-cols-2 lg:grid-cols-1  lg:gap-2  items-center">
              {/* title */}
              <h2 className="text-lg  lg:text-2xl font-bold">
                Title:
                <span className="text-lg font-semibold"> {name}</span>
              </h2>
              {/* genre */}
              <p className="text-base ">
                <span className=" font-semibold text-sm lg:font-bold lg:text-lg">
                  Genre:
                </span>{" "}
                {genre}
              </p>
            </section>

            <section className="grid  grid-cols-2 lg:grid-cols-1 lg:gap-2 items-center">
              {/* duration */}
              <p className="text-base ">
                <span className="font-semibold text-sm lg:font-bold lg:text-lg">
                  Duration:
                </span>{" "}
                {duration} min
              </p>

              {/* release year */}
              <p className="text-base ">
                <span className="font-semibold text-sm lg:font-bold lg:text-lg">
                  Release Year:
                </span>{" "}
                {releaseYear}
              </p>
            </section>

            {/* rating */}
            <div className="flex items-center font-semibold text-sm lg:font-bold lg:text-lg">
              <span className="mr-2">Rating:</span>
              {[...Array(validRating)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  className=" w-5 h-5 lg:w-7 lg:h-7 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 15.27l-6.18 3.63 1.64-7.03L.46 6.93l7.19-.61L10 0l2.35 6.31 7.19.61-5.99 4.94 1.64 7.03L10 15.27z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="card-body">
          <div className=" px-6 space-y-4 ">
            <h2 className="text-3xl font-bold active">Summary</h2>
            <p className="break-words  text-lg opacity-50 font-semibold">
              {isExpanded ? summary : `${summary.slice(0, 396)}...`}
            </p>
            <button
              onClick={toggleSummary}
              className="text-blue-500 hover:underline"
            >
              {isExpanded ? "Show Less" : "Read More"}
            </button>
          </div>

          {/* buttons */}
          <div className="card-actions flex-col md:flex-row lg:flex-row 
          md:justify-around lg:justify-around 
          gap-5 items-end  pr-4 md:pr-0 lg:pr-0 py-2 md:py-6 lg:py-6">
            <button
              onClick={handleDelete}
              className="btn bg-primary text-white lg:text-xl"
            >
              Delete Movie
            </button>

            <div className="bg-white rounded-xl">
            <button
              onClick={handleAddTOFavorite}
              className={"btn bg-primary text-white lg:text-xl"}
              disabled={isFavorite}
            >
              {isFavorite ? "Added to Favorites" : "Add to Favorite"}
            </button>
            </div>
            
            <button className="btn bg-primary text-white lg:text-xl">
              <Link to={`/update/${_id}`}> Update Movie</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
