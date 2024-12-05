// import React from 'react';

import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";

const Details = () => {
  const { user } = useContext(AuthContext);
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
    fetch(`http://localhost:5000/favorites/${email}`)
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
    fetch(`http://localhost:5000/movie/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount === 1) {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then(() => {
            navigate("/allMovies");
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: "Failed to delete the movie.",
            icon: "error",
            confirmButtonText: "Ok",
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

    fetch("http://localhost:5000/favorites", {
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
    <div className="container mx-auto">
      <div className="card card-compact  shadow-xl bg-white p-6">
        <div className="flex flex-row gap-10">
          {/* image */}
          <div>
            <figure>
              <img
                className="w-[600px] h-80 object-cover rounded-lg"
                src={photo}
                alt={name}
              />
            </figure>
          </div>
          {/* details */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800">{name}</h2>
            <p className="text-sm text-gray-500 mt-2">
              <span className="font-semibold">Genre:</span> {genre}
            </p>
            <p className="text-sm text-gray-500">
              <span className="font-semibold">Duration:</span> {duration} min
            </p>

            <p className="text-sm text-gray-500">
              <span className="font-semibold">Release Year:</span> {releaseYear}
            </p>

            <div className="flex items-center mt-2">
              {[...Array(validRating)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-yellow-400"
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
        <div className="card-body">
          {/* Summary */}
          <div className="mt-6 text-lg text-gray-500 mb-5">
            <h2 className="text-3xl font-bold text-gray-800 mb-5">Summary</h2>
            <p className="break-words">
              {isExpanded ? summary : `${summary.slice(0, 396)}...`}
            </p>
            <button
              onClick={toggleSummary}
              className="text-blue-500 hover:underline mt-2"
            >
              {isExpanded ? "Show Less" : "Read More"}
            </button>
          </div>
          <div className="card-actions justify-end">
            <button
              onClick={handleDelete}
              className="btn bg-primary text-white lg:text-xl"
            >
              Delete Movie
            </button>
            <button
              onClick={handleAddTOFavorite}
              className="btn bg-primary text-white lg:text-xl"
              disabled={isFavorite}
            >
              {isFavorite ? "Added to Favorites" : "Add to Favorite"}
            </button>
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
