// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Heading from "./Heading";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { Rating } from "react-simple-star-rating";
import Swal from "sweetalert2";

const Update = () => {
  const movie = useLoaderData();
  const {
    _id,
    photo,
    name,
    genre,
    duration,
    releaseYear,
    summary,
    rating: movieRating,
  } = movie;

  const [selectedDate, setSelectedDate] = useState(new Date(releaseYear));
  const [rating, setRating] = useState(movieRating || 0);

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
  const handleUpdate = (e) => {
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

    const updatedMovie = {
      photo,
      name,
      genre,
      duration,
      releaseYear,
      rating,
      summary,
    };

    fetch(`https://assi10-api.vercel.app/movie/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedMovie),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "movie added successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  const isValidURL = (string) => {
    try {
      new URL(string);
      return true;
    } catch {
    
      return false;
    }
  };
  return (
    <div className="lg:w-3/4 mx-auto">
      <Heading
        title={"Update movie"}
        subtitle={"Wovie next big hit!"}
      ></Heading>

      <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
        <form onSubmit={handleUpdate} className="card-body">
          <div className="flex flex-col lg:flex-row gap-5">
            {/* movie poster*/}
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Movie Poster</span>
              </label>
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                placeholder="Movie Poster"
                className="input input-bordered"
                required
              />
              {photoError && (
                <p className="text-red-500 text-sm">{photoError}</p>
              )}
            </div>
            {/* movie title */}
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Movie Title</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={name}
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

              <select
                name="genre"
                defaultValue={genre}
                className="select select-bordered"
                required
              >
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
              {genreError && (
                <p className="text-red-500 text-sm">{genreError}</p>
              )}
            </div>
            {/* duration */}
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Duration</span>
              </label>
              <input
                type="text"
                name="duration"
                defaultValue={duration}
                placeholder="duration"
                className="input input-bordered"
                required
              />
              {durationError && (
                <p className="text-red-500 text-sm">{durationError}</p>
              )}
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
                defaultValue={releaseYear}
                selected={selectedDate}
                onChange={handleDateChange}
                showYearPicker
                dateFormat="yyyy"
                placeholderText="Select a year"
                className="input input-bordered w-full select"
                required
              />
              {releaseYearError && (
                <p className="text-red-500 text-sm">{releaseYearError}</p>
              )}
            </div>
            {/* rating */}
            <div className="form-control flex-1 ">
              <label className="label">
                <span className="label-text">Rating </span>
              </label>

              <div className="rating-container flex justify-between input input-bordered">
                <Rating
                  onClick={handleRating}
                  ratingValue={rating}
                  placeholder="rating "
                  required
                />

                <div name="rating" className="p-3">
                  {rating}
                </div>
              </div>
              {ratingError && (
                <p className="text-red-500 text-sm">{ratingError}</p>
              )}
            </div>
          </div>

          {/* summary */}
          <div className="form-control h-40">
            <label className="label">
              <span className="label-text ">Summary</span>
            </label>
            <textarea
              name="summary"
              defaultValue={summary}
              placeholder="movie summary"
              className="textarea textarea-bordered h-full p-4 text-base font-medium text-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            {summaryError && (
              <p className="text-red-500 text-sm">{summaryError}</p>
            )}
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Update Movie</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
