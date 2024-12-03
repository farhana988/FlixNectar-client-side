// import React from 'react';

import { useState } from "react";
import Heading from "../components/Heading";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Rating } from "react-simple-star-rating";

const AddMovie = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [rating, setRating] = useState(0);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleRating = (rate) => {
    setRating(rate);

  };

  return (
    <div className="lg:w-3/4 mx-auto">
      <Heading
        title={"Add movie"}
        subtitle={
          "Want to share your favorite films with others? It is easy to add movies to FlixNectar! Simply fill in the details, upload a poster or image, and share your movie with the community. Let others discover, enjoy, and add to their own favorites list. Your movie recommendations could become the next big hit!"
        }
      ></Heading>

      <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
        <form className="card-body">
          <div className="flex flex-col lg:flex-row gap-5">
            {/* movie poster*/}
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Movie Poster</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Movie Poster"
                className="input input-bordered"
                required
              />
            </div>
            {/* movie title */}
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Movie Title</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Movie Title"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-5">
            {/* genre */}
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Genre</span>
              </label>

              <select name="genre" className="select select-bordered" required>
                <option value="" disabled selected className="text-gray-400">
                  Select Genre
                </option>
                <option value="action">Action</option>
                <option value="comedy">Comedy</option>
                <option value="drama">Drama</option>
                <option value="horror">Horror</option>
                <option value="romance">Romance</option>
                <option value="sci-fi">Sci-Fi</option>
                <option value="thriller">Thriller</option>
                <option value="documentary">Documentary</option>
                <option value="animation">Animation</option>
              </select>
            </div>
            {/* duration */}
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Duration</span>
              </label>
              <input
                type="number"
                name="duration"
                placeholder="duration"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-5">
            {/* release year */}
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Release Year</span>
              </label>
              <DatePicker
                name="releaseYear"
                selected={selectedDate}
                onChange={handleDateChange}
                showYearPicker
                dateFormat="yyyy"
                placeholderText="Select a year"
                className="input input-bordered w-full select"
              />
            </div>
            {/* rating */}
            <div className="form-control flex-1 ">
              <label className="label">
                <span className="label-text">Rating </span>
              </label>
           

              <div className="rating-container flex justify-between overflow-y-hidden  input input-bordered">
              
                <Rating
                  onClick={handleRating} 
                 
                  type="text"
                  name="rating"
                  placeholder="rating "
                  required
                />

                <div className="p-3">{rating}</div>
              </div>

           
            </div>
          </div>

          {/* summary */}
          <div className="form-control h-40">
            <label className="label">
              <span className="label-text ">Summary</span>
            </label>
            <textarea
              type="text"
              name="summary"
              placeholder="Movie summary"
              className="input input-bordered h-full p-4"
              required
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Add Movie</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMovie;
