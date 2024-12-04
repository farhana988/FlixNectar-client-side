// import React from 'react';


import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Details = () => {
    const movie = useLoaderData()
    const {_id,photo, name, genre, duration, releaseYear, rating,summary } = movie
  
  // Initialize useNavigate
  const navigate = useNavigate();

  const handleDelete = () => {
 
    
    // Send DELETE request
    fetch(`http://localhost:5000/movie/${_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
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
            confirmButtonText: "Yes, delete it!"
        }).then(() => {
          // After successful deletion, navigate to the All Movies page
          navigate('/allMovies');
        });
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Failed to delete the movie.',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      }
    })
  };

    


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
          <button onClick={handleDelete}
           className="btn bg-primary text-white lg:text-xl">
            
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