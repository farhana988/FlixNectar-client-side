import { Link, useLoaderData } from "react-router-dom";
import Heading from "./Shared/Heading";
import MovieCard from "../pages/AllMovies/MovieCard";


const FeaturedMovies = () => {
  const movies = useLoaderData();
  return (
    <div>
      <section className="container mx-auto">
        <Heading
          title={"Featured Movies"}
          subtitle={
            "Discover top films, from thrilling blockbusters to heartfelt dramas and timeless classics. Let these must-see picks transport you to another world!"
          }
        ></Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 lg:px-0 ">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie._id}></MovieCard>
          ))}
        </div>
        <div className="flex justify-end mt-4  ">
          <button
            className=" mr-7 lg:mr-0
             btn bg-primary ring-2 ring-offset-4 ring-primary text-white
              lg:text-xl mt-5"
          >
            <Link to="/allMovies">See all movies</Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default FeaturedMovies;
