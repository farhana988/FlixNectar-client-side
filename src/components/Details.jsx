// import React from 'react';

import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { useContext,  } from "react";

const Details = () => {
  const { user } = useContext(AuthContext);
  const movie = useLoaderData();
  const { _id, photo, name, genre, duration, releaseYear, rating, summary } =
    movie;

  const navigate = useNavigate();
  const email = user.email;




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
    const addFavorite = {
      photo,
      name,
      genre,
      duration,
      releaseYear,
      rating,
      summary,
      email,
    };
    fetch("http://localhost:5000/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addFavorite),
    })
      .then((res) => res.json())
      .then(() => {
   
    
        Swal.fire({
          title: "Added to Favorites!",
          text: "This movie is now in your favorites.",
          icon: "success",
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <div>
      <Link to={`/myFavorites/${email}`}>my fav</Link>
      <div className="card card-compact  shadow-xl bg-white">
        <figure>
          <img
            className="w-10/12  h-40 rounded-xl mt-8"
            src={photo}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title ">{name}</h2>
          {genre}, {duration}, {releaseYear},rating: {rating},
          <br />
          {summary}
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
             
            >
              Add to Favorite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
