import { Link, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Heading from "../components/Heading";
import MovieCard from "../components/movieCard";

const Home = () => {
  const movies = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      {/* featured mpvies section */}
      <section className="container mx-auto">
        <Heading
          title={"Featured Movies"}
          subtitle={
            "Explore our handpicked selection of Featured Movies that are making waves in the world of cinema. From action-packed blockbusters to heartfelt dramas and mind-bending thrillers, these films are the ones you can’t miss. Discover top-rated movies, new releases, and timeless classics, all in one place. Dive into the magic of film and let these featured picks transport you to another world."
          }
        ></Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {movies.map((movie) => (
            <MovieCard
              movie={movie}
              
              key={movie._id}
            ></MovieCard>
          ))}
        </div>
        <div className="flex justify-end mt-4  ">
        <button 
             
             className="
             btn bg-primary ring-2 ring-offset-4 ring-primary text-white lg:text-xl mt-5">
              <Link to="/allMovies">See all movies</Link>  
            </button>
            </div>
      </section>
    </div>
  );
};

export default Home;
