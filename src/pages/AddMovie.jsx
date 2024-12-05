// import React from 'react';

import { useState } from "react";
import Heading from "../components/Heading";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Rating } from "react-simple-star-rating";


import Swal from "sweetalert2";


const AddMovie = () => {

 
  const [selectedDate, setSelectedDate] = useState(null);
  const [rating, setRating] = useState(0);
  const [photoError, setPhotoError] = useState("");
  const [nameError, setNameError] = useState("");
  const [genreError, setGenreError] = useState("");
  const [durationError, setDurationError] = useState("");
  const [releaseYearError, setReleaseYearError] = useState("");
  const [ratingError, setRatingError] = useState("");
  const [summaryError, setSummaryError] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleRating = (rate) => {
    setRating(rate);

  };
  const handleAddMovie = (e) => {
    e.preventDefault();
    const photo = e.target.photo.value;
    const name = e.target.name.value;
    const genre = e.target.genre.value;
    const duration = e.target.duration.value;
    const releaseYear = e.target.releaseYear.value;
    const summary = e.target.summary.value;

 


    let isValid = true;
    setPhotoError("");
    setNameError("");
    setGenreError("");
    setDurationError("");
    setReleaseYearError("");
    setRatingError("");
    setSummaryError("");

   
    if (!photo || !isValidURL(photo)) {
      setPhotoError("Please provide a valid image URL for the movie poster.");
      isValid = false;
    }
    if (!name || name.length < 2) {
      setNameError("Movie title must have at least 2 characters.");
      isValid = false;
    }
    if (!genre) {
      setGenreError("Please select a genre.");
      isValid = false;
    }
    if (!duration || isNaN(duration) || duration <= 60) {
      setDurationError("Duration must be a number greater than 60 minutes.");
      isValid = false;
    }

    if (!releaseYear) {
      setReleaseYearError("Please select a release year.");
      isValid = false;
    }
    if (rating === 0) {
      setRatingError("Please select a rating.");
      isValid = false;
    }
    if (!summary || summary.length < 10) {
      setSummaryError("Summary must be at least 10 characters long.");
      isValid = false;
    }

    if (!isValid) return; 

    const newMovie = { photo, name, genre, duration, releaseYear, rating, summary }
   
    fetch('http://localhost:5000/movie', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newMovie)
    })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                
                Swal.fire({
                    title: 'Success!',
                    text: 'movie added successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                });
                e.target.reset();
                setRating(0);
                setSelectedDate(null);
            }
        })
   
  };

  const isValidURL = (string) => {
    try {
      new URL(string);
      return true;
    } catch (err) {
      console.log(err)
      return false;
    }
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
        <form onSubmit={handleAddMovie} className="card-body">
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
              {photoError && <p className="text-red-500 text-sm">{photoError}</p>}
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
              {nameError && <p className="text-red-500 text-sm">{nameError}</p>}
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
              {genreError && <p className="text-red-500 text-sm">{genreError}</p>}
            </div>
            {/* duration */}
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Duration</span>
              </label>
              <input
                type="text"
                name="duration"
                placeholder="duration"
                className="input input-bordered"
                required
              />
               {durationError && <p className="text-red-500 text-sm">{durationError}</p>}
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
                required
              />
               {releaseYearError && <p className="text-red-500 text-sm">{releaseYearError}</p>}
            </div>
            {/* rating */}
            <div className="form-control flex-1 ">
              <label className="label">
                <span className="label-text">Rating </span>
              </label>
           

              <div className="rating-container flex justify-between input input-bordered">
              
                <Rating
                  onClick={handleRating} 
                  type="text"
                 
                  placeholder="rating "
                  required
                />

                <div  name="rating" className="p-3">{rating}</div>
              </div>
              {ratingError && <p className="text-red-500 text-sm">{ratingError}</p>}
           
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
              {summaryError && <p className="text-red-500 text-sm">{summaryError}</p>}
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
