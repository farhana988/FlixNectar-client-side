import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../provider/ThemeProvider";
import NewsCard from "./NewsCard";
import Heading from "../Shared/Heading";

const News = () => {
  const { isToggled } = useContext(ThemeContext);
  const [articles, setArticles] = useState({
    movieNews: [],
    interviews: [],
    filmReviews: [],
    behindTheScenes: [],
  });

  const [selectedCategory, setSelectedCategory] = useState("movieNews");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./articles.json");
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching the data", error);
      }
    };

    fetchData();
  }, []);

  const categoryArticles = articles[selectedCategory] || [];

  return (
    <div className="container mx-auto ">
      {/* Title  */}
      <Heading
        title={"Movie News and Articles"}
        subtitle={
          "Get the latest updates, exclusive interviews, and behind-the-scenes insights from the world of cinema. Stay in the know!"
        }
      ></Heading>

      <section
        className="flex flex-col-reverse lg:flex-row justify-between gap-10 lg:gap-0 
      px-5 lg:px-0  "
      >
        {/* card */}
        <div className="">
          {/* card title */}
          <h2
            className={`text-2xl lg:text-4xl font-bold active mb-8 ml-3 ${
              isToggled ? "text-primary" : "text-ivory"
            }`}
          >
            {selectedCategory === "movieNews" && "Movie News"}
            {selectedCategory === "interviews" && "Interviews"}
            {selectedCategory === "filmReviews" && "Film Reviews"}
            {selectedCategory === "behindTheScenes" && "Behind the Scenes"}
          </h2>
          {/* card section */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 ">
            {categoryArticles.map((item) => (
              <NewsCard key={item.id} item={item}
              isToggled={isToggled}></NewsCard>
            ))}
          </div>
        </div>
        {/* ---------------------------------------------------------------------------------- */}

        {/* Category Buttons */}
        <div className="text-center flex flex-col gap-6 lg:gap-10 lg:mt-20">
          <section>
            {/* movie news */}
            <button
              className={`btn btn-wide  ${
                selectedCategory === "movieNews"
                  ? `bg-primary text-white ring-2 ring-offset-4 ring-primary lg:text-xl`
                  : isToggled
                  ? "bg-gray-300 text-darkSlate hover:bg-gray-100"
                  : "bg-[#5b5d5f88] text-ivory hover:bg-gray-600"
              } mx-2`}
              onClick={() => setSelectedCategory("movieNews")}
            >
              Movie News
            </button>
            {/* interview */}
            <button
              className={`btn btn-wide mt-6 md:mt-0 lg:mt-10 ${
                selectedCategory === "interviews"
                  ? `bg-primary text-white ring-2 ring-offset-4 ring-primary lg:text-xl`
                  : isToggled
                  ? "bg-gray-300 text-darkSlate hover:bg-gray-100"
                  : "bg-[#5b5d5f88] text-ivory hover:bg-gray-600"
              } mx-2`}
              onClick={() => setSelectedCategory("interviews")}
            >
              Interviews
            </button>
          </section>
          <section>
            {/* film review */}
            <button
              className={`btn btn-wide ${
                selectedCategory === "filmReviews"
                  ? `bg-primary text-white ring-2 ring-offset-4 ring-primary lg:text-xl`
                  : isToggled
                  ? "bg-gray-300 text-darkSlate hover:bg-gray-100"
                  : "bg-[#5b5d5f88] text-ivory hover:bg-gray-600"
              } mx-2`}
              onClick={() => setSelectedCategory("filmReviews")}
            >
              Film Reviews
            </button>
            {/* behind the scene */}
            <button
              className={`btn btn-wide mt-6 md:mt-0 lg:mt-10 ${
                selectedCategory === "behindTheScenes"
                  ? `bg-primary text-white ring-2 ring-offset-4 ring-primary lg:text-xl`
                  : isToggled
                  ? "bg-gray-300 text-darkSlate hover:bg-gray-100"
                  : "bg-[#5b5d5f88] text-ivory hover:bg-gray-600"
              } mx-2`}
              onClick={() => setSelectedCategory("behindTheScenes")}
            >
              Behind the Scenes
            </button>
          </section>
        </div>
      </section>
    </div>
  );
};

export default News;
