// import React from 'react';

import { useContext, useState } from "react";
import Heading from "../components/Heading";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Rating } from "react-simple-star-rating";

import Swal from "sweetalert2";
import { ThemeContext } from "../provider/ThemeProvider";

const AddMovie = () => {
  const { isToggled } = useContext(ThemeContext);

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


  const handleAddMovie = (e) => {
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

    const newMovie = {
      ...form,
      releaseYear: selectedDate.getFullYear(),
      rating,
      genre: form.genre.join(", "),
    };


    fetch("https://assi10-api.vercel.app/movie", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMovie),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Movie added successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          setForm({ photo: "", name: "", genre: [], duration: "", summary: "" });
          setRating(0);
          setSelectedDate(null);
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
    <div className="lg:w-3/4 mx-auto  py-10">
      <Heading
        title={"Add movie"}
        subtitle={
          "Share your favorite films on FlixNectar! Just add movie details, upload a poster, and let the community discover and enjoy your picks. Your recommendations could be the next big hit!"
        }
      ></Heading>

      <div
        className={`card shadow-xl shadow-primary mx-6 ${
          isToggled ? "bg-[#ffffff] text-darkSlate" : "bg-card text-ivory"
        }`}
      >
        <form  onSubmit={handleAddMovie} className="card-body">
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
               {errors.photo && <p className="text-red-500 text-sm">{errors.photo}</p>}
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
             {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-5">
            {/* genre */}
            <div className="form-control flex-1 ">
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
                multiple
                value={form.genre}
                onChange={handleGenreChange}
                className={`select select-bordered ${
                  isToggled ? "text-darkSlate" : "bg-[#5b5d5f88]  text-ivory"
                }`}
                required
              >
               
               
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
              {errors.genre && <p className="text-red-500 text-sm">{errors.genre}</p>}
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
                placeholder="Duration"
                value={form.duration}
                onChange={handleInputChange}
                className={`input input-bordered  ${
                  isToggled ? "text-darkSlate" : "bg-[#5b5d5f88]  text-ivory"
                }`}
                required
              />
                {errors.duration && <p className="text-red-500 text-sm">{errors.duration}</p>}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-5">
            {/* release year */}
            <div className="form-control flex-1 ">
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
                selected={selectedDate}
                onChange={handleDateChange}
                showYearPicker
                dateFormat="yyyy"
                placeholderText="Select a year"
                className={`input input-bordered  w-full select ${
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
                className={`rating-container flex justify-between input input-bordered
                  ${
                    isToggled ? "text-darkSlate" : "bg-[#5b5d5f88]  text-ivory"
                  }`}
              >
                <Rating
                  onClick={handleRating}
                  ratingValue={rating}
                  type="text"
                  placeholder="rating "
                  required
                />

                <div name="rating" className="p-3">
                  {rating}
                </div>
              </div>
              {errors.rating && <p className="text-red-500 text-sm">{errors.rating}</p>}
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
              type="text"
              name="summary"
              placeholder="Movie summary"
              value={form.summary}
              onChange={handleInputChange}
              className={`input input-bordered h-full p-4 ${
                isToggled ? "text-darkSlate" : "bg-[#5b5d5f88]  text-ivory"
              }`}
              required
            />
            {errors.summary && <p className="text-red-500 text-sm">{errors.summary}</p>}
          </div>

          <div className="form-control mt-6">
            <button className="btn bg-primary  text-ivory lg:text-xl">
              Add Movie
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMovie;
