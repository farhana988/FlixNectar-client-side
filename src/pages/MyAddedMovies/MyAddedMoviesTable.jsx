/* eslint-disable react/prop-types */

import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyAddedMoviesTable = ({ added, setLoadedAdded}) => {
  const { photo, name, genre, duration, summary, rating ,_id} = added || {};

//   delete
  const handleDelete = (id) => {
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
                setLoadedAdded((prevServices) =>
                    prevServices.filter((service) => service._id !== id)
                  );
              Swal.fire({
                title: "Deleted!",
                text: "Your movie has been deleted.",
                icon: "success",
              });
             
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



  return (
    <>
      <tr className={` border-b `}>
        {/* image */}
        <td className="border-2">
          <img
            className="h-24 w-32 object-cover rounded-xl "
            src={photo}
            alt=""
          />
        </td>
        {/* title */}
        <td className="lg:text-lg break-words border-2">
          {name?.substring(0, 20)}...
        </td>
        {/* genre */}
        <td className="lg:text-lg border-2">{genre?.substring(0, 20)}...</td>
        {/* duration */}
        <td className="lg:text-lg border-2 text-center">{duration}</td>
        {/* rating */}
        <td className="lg:text-lg   border-2 text-center">{rating}</td>
        {/* summary */}
        <td className="lg:text-lg break-words border-2">
          {summary?.substring(0, 70)}...
        </td>
        {/* action btn */}
        <td
          className="flex flex-col lg:flex-row gap-5 lg:gap-2 
      items-center justify-center py-5 md:py-3 lg:py-8  border-2 "
        >
          {/* delete btn */}
          <button
            onClick={() => handleDelete(_id)}
            className="  py-2 rounded-full text-xl lg:text-2xl"
          >
            <MdDelete />
          </button>
          {/* update btn */}
          <button
            // onClick={handleUpdateClick}
            className=" lg:pl-4 py-2 rounded-full text-xl lg:text-2xl"
          > <Link to={`/update/${_id}`}>
            <FaEdit /></Link>
          </button>
        </td>
      </tr>

    </>
  );
};

export default MyAddedMoviesTable;
