// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Heading from "./Heading";
import { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { Rating } from "react-simple-star-rating";
import Swal from "sweetalert2";
import { ThemeContext } from "../provider/ThemeProvider";

const Update = () => {
  const { isToggled } = useContext(ThemeContext);
  const movieData = useLoaderData();

  const [form, setForm] = useState({
    photo: "",
    name: "",
    genre: [],
    duration: "",
    releaseYear: "",
    summary: "",
  });

  const [selectedDate, setSelectedDate] = useState(null);
  const [rating, setRating] = useState(0);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (movieData) {
      setForm({
        photo: movieData.photo || "",
        name: movieData.name || "",
        genre: movieData.genre ? movieData.genre.split(", ") : [],
        duration: movieData.duration || "",
        releaseYear: movieData.releaseYear || "",
        summary: movieData.summary || "",
      });

      const validReleaseYear = movieData.releaseYear
        ? new Date(movieData.releaseYear, 0, 1)
        : new Date();
      setSelectedDate(validReleaseYear);

      setRating(movieData.rating || 0);
    }
  }, [movieData]);




   const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));

  
    setErrors((prevErrors) => {
      const updatedErrors = { ...prevErrors };

      if (name === "photo" && isValidURL(value)) delete updatedErrors.photo;
      if (name === "name" && value.length >= 2) delete updatedErrors.name;
      if (name === "duration" && !isNaN(value) && value > 60) delete updatedErrors.duration;
      if (name === "summary" && value.length >= 10) delete updatedErrors.summary;

      return updatedErrors;
    });
  };

  const handleGenreChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    setForm((prevForm) => ({ ...prevForm, genre: selectedOptions }));

    setErrors((prevErrors) => {
      const updatedErrors = { ...prevErrors };
      if (selectedOptions.length > 0) delete updatedErrors.genre;
      return updatedErrors;
    });
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);

    setErrors((prevErrors) => {
      const updatedErrors = { ...prevErrors };
      if (date) delete updatedErrors.releaseYear;
      return updatedErrors;
    });
  };

  const handleRating = (rate) => {
    setRating(rate);

    setErrors((prevErrors) => {
      const updatedErrors = { ...prevErrors };
      if (rate > 0) delete updatedErrors.rating;
      return updatedErrors;
    });
  };





  const handleUpdate = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!form.photo || !isValidURL(form.photo)) {
      newErrors.photo = "Please provide a valid image URL.";
    }
    if (!form.name || form.name.length < 2) {
      newErrors.name = "Movie title must be at least 2 characters long.";
    }
    if (!form.genre || form.genre.length === 0) {
      newErrors.genre = "Please select at least one genre.";
    }
    if (!form.duration || isNaN(form.duration) || form.duration <= 60) {
      newErrors.duration = "Duration must be a number greater than 60 minutes.";
    }
    if (!selectedDate) {
      newErrors.releaseYear = "Please select a release year.";
    }
    if (rating === 0) {
      newErrors.rating = "Please select a rating.";
    }
    if (!form.summary || form.summary.length < 10) {
      newErrors.summary = "Summary must be at least 10 characters long.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const updatedMovie = {
      ...form,
      releaseYear: selectedDate.getFullYear(),
      rating,
      genre: form.genre.join(", "),
    };

    fetch(`https://assi10-api.vercel.app/movie/${movieData._id}`, {
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
            text: "movie updated successfully",
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
    <div className="lg:w-3/4 mx-auto py-10">
      <Heading
        title={"Update movie"}
        subtitle={
          "Update the details of an existing movie. Modify any fields and save your changes to keep your collection accurate and up-to-date!"
        }
      ></Heading>

      <div
        className={`card shadow-xl shadow-primary mx-6 ${
          isToggled ? "bg-[#ffffff] text-darkSlate" : "bg-card text-ivory"
        }`}
      >
        <form onSubmit={handleUpdate} className="card-body">
          <div className="flex flex-col lg:flex-row gap-5">
            {/* movie poster*/}
            <div className="form-control flex-1">
              <label className="label">
                <span
                  className={`label-text text-lg font-semibold ${
                    isToggled ? "text-darkSlate" : "text-ivory"
                  }`}
                >
                  Movie Poster
                </span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Movie Poster URL"
                value={form.photo}
                onChange={handleInputChange}
                className={`input input-bordered  ${
                  isToggled ? "text-darkSlate" : "bg-[#5b5d5f88]  text-ivory"
                }`}
                required
              />
              {errors.photo && (
                <p className="text-red-500 text-sm">{errors.photo}</p>
              )}
            </div>
            {/* movie title */}
            <div className="form-control flex-1">
              <label className="label">
                <span
                  className={`label-text text-lg font-semibold ${
                    isToggled ? "text-darkSlate" : "text-ivory"
                  }`}
                >
                  Movie Title
                </span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Movie Title"
                value={form.name}
                onChange={handleInputChange}
                className={`input input-bordered  ${
                  isToggled ? "text-darkSlate" : "bg-[#5b5d5f88]  text-ivory"
                }`}
                required
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-5">
            {/* genre */}
            <div className="form-control flex-1">
              <label className="label">
                <span
                  className={`label-text text-lg font-semibold ${
                    isToggled ? "text-darkSlate" : "text-ivory"
                  }`}
                >
                  Genre
                </span>
              </label>

              <select
                name="genre"
                value={form.genre}
                onChange={handleGenreChange}
                className={`select select-bordered ${
                  isToggled ? "text-darkSlate" : "bg-[#5b5d5f88] text-ivory"
                }`}
                multiple
                required
              >
                <option value="" disabled selected>
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
              {errors.genre && (
                <p className="text-red-500 text-sm">{errors.genre}</p>
              )}
            </div>
            {/* duration */}
            <div className="form-control flex-1">
              <label className="label">
                <span
                  className={`label-text text-lg font-semibold ${
                    isToggled ? "text-darkSlate" : "text-ivory"
                  }`}
                >
                  Duration
                </span>
              </label>
              <input
                type="text"
                name="duration"
                value={form.duration}
                onChange={handleInputChange}
                placeholder="duration"
                className={`input input-bordered  ${
                  isToggled ? "text-darkSlate" : "bg-[#5b5d5f88]  text-ivory"
                }`}
                required
              />
              {errors.duration && (
                <p className="text-red-500 text-sm">{errors.duration}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-5">
            {/* release year */}
            <div className="form-control flex-1">
              <label className="label">
                <span
                  className={`label-text text-lg font-semibold ${
                    isToggled ? "text-darkSlate" : "text-ivory"
                  }`}
                >
                  Release Year
                </span>
              </label>
              <DatePicker
                name="releaseYear"
                // defaultValue={releaseYear}
                selected={selectedDate}
                onChange={handleDateChange}
                showYearPicker
                dateFormat="yyyy"
                placeholderText="Select a year"
                className={`input input-bordered  w-full select  ${
                  isToggled ? "text-darkSlate" : "bg-[#5b5d5f88]  text-ivory"
                }`}
                required
              />
              {errors.releaseYear && (
                <p className="text-red-500 text-sm">{errors.releaseYear}</p>
              )}
            </div>
            {/* rating */}
            <div className="form-control flex-1 ">
              <label className="label">
                <span
                  className={`label-text text-lg font-semibold ${
                    isToggled ? "text-darkSlate" : "text-ivory"
                  }`}
                >
                  Rating{" "}
                </span>
              </label>

              <div
                className={`rating-container flex justify-between input input-bordered  ${
                  isToggled ? "text-darkSlate" : "bg-[#5b5d5f88]  text-ivory"
                }`}
              >
                <Rating
                  initialValue={rating}
                  onClick={handleRating}
                  ratingValue={rating}
                  placeholder="rating "
                  required
                />

                <div name="rating" className="p-3">
                  {rating}
                </div>
              </div>
              {errors.rating && (
                <p className="text-red-500 text-sm">{errors.rating}</p>
              )}
            </div>
          </div>

          {/* summary */}
          <div className="form-control h-40">
            <label className="label">
              <span
                className={`label-text text-lg font-semibold ${
                  isToggled ? "text-darkSlate" : "text-ivory"
                }`}
              >
                Summary
              </span>
            </label>
            <textarea
              name="summary"
              value={form.summary}
              onChange={handleInputChange}
              placeholder="movie summary"
              className={`textarea textarea-bordered h-full p-4 text-base font-medium  ${
                isToggled ? "text-darkSlate" : "bg-[#5b5d5f88]  text-ivory"
              }`}
              required
            />
            {errors.summary && (
              <p className="text-red-500 text-sm">{errors.summary}</p>
            )}
          </div>

          <div className="form-control mt-6">
            <button className="btn bg-primary  text-ivory lg:text-xl">
              Update Movie
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
