/* eslint-disable react/prop-types */
// import React from 'react';

import Swal from "sweetalert2";

const FavoriteCard = ({favorite, loadedFavorite, setLoadedFavorite}) => {
  
    const {_id, photo, name, genre, duration, releaseYear, rating, } = favorite

    const handleDelete = _id => {
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

                fetch(`http://localhost:5000/favorites/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                          
                            const remainingFavorites = loadedFavorite.filter(favorite => favorite._id !== _id);
                            setLoadedFavorite(remainingFavorites);

                        }
                    })

            }
        });
    }

  return (
    <div >
 
  







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
       
        
        <div className="card-actions justify-end">
          <button
          
          onClick={() => handleDelete(_id)}
           className="btn bg-primary text-white lg:text-xl">
          delete
        
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};
export default FavoriteCard;