/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import { useContext } from "react";
import { ThemeContext } from "../../provider/ThemeProvider";
import { MdDelete } from "react-icons/md";

const FavoriteCard = ({ favorite, loadedFavorite, setLoadedFavorite }) => {
  const { _id, photo, name, genre, duration, releaseYear, rating,  } = favorite;
  const validRating =
    typeof rating === "number" && !isNaN(rating) ? Math.floor(rating) : 0;
    const { isToggled } = useContext(ThemeContext);
    
  const handleDelete = (_id) => {
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
        fetch(`https://assi10-api.vercel.app/favorites/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
          
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              const remainingFavorites = loadedFavorite.filter(
                (favorite) => favorite._id !== _id
              );
              setLoadedFavorite(remainingFavorites);
            }
          });
      }
    });
  };

  return (
    <div>
    <div
      className={`card card-compact h-[430px] flex flex-col shadow-xl shadow-primary ${
        isToggled ? "bg-[#ffffff] text-darkSlate" : "bg-card text-ivory"
      }`}
    >
      <figure>
        <img
          className="w-10/12 h-40 rounded-xl mt-7"
          src={photo}
          alt={name}
        />
      </figure>
      <div className="mx-8 flex-grow">
        <h2 className="text-lg lg:text-2xl font-bold mt-3">
          Title:  
          <span className="text-lg font-semibold break-words">  {name}</span>
        </h2>
        <p className="text-base ">
          <span className="font-semibold text-sm lg:font-bold lg:text-lg">
            Genre:
          </span> {genre}
        </p>
        <p className="text-base ">
          <span className="font-semibold text-sm lg:font-bold lg:text-lg">
            Duration:
          </span> {duration} min
        </p>
        <p className="text-base ">
          <span className="font-semibold text-sm lg:font-bold lg:text-lg">
            Release Year:
          </span>{" "}
          {releaseYear}
        </p>
  
        <div className="flex items-center font-semibold text-sm lg:font-bold lg:text-lg">
          <span className="mr-2">Rating:</span> 
          {[...Array(validRating)].map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 lg:w-7 lg:h-7 text-yellow-400"
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
  
  
      <div className="card-actions justify-end pr-7 pb-6 mt-auto"> 
        <button
          onClick={() => handleDelete(_id)}
          className="text-xl lg:text-3xl"
        >
           <MdDelete />
        </button>
      </div>
    </div>
  </div>
  
  );
};
export default FavoriteCard;
