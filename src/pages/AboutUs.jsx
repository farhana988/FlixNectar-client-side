
import Heading from "../components/Shared/Heading";
import about from "../assets/about.png";
import { useContext } from "react";
import { ThemeContext } from "../provider/ThemeProvider";

const AboutUs = () => {
  const { isToggled } = useContext(ThemeContext);

  return (
    <div className={`py-20`}>
      <div className="container mx-auto px-6 md:px-12">
        {/* Title Section */}
        <Heading
          title="About Us"
          subtitle="At FlixNectar, we bring the world of cinema to your fingertips."
        />

        {/* Description Section */}
        <div className="lg:flex justify-between items-center mb-16">
          <div className="lg:w-1/2">
            <p className="md:text-lg lg:text-xl opacity-80 leading-relaxed mb-6">
              <i>FlixNectar is an online movie platform designed to help you
              discover and explore movies effortlessly. Whether you are looking
              for the latest hits, classic favorites, or hidden gems, our
              platform provides an immersive cinematic experience. With a sleek,
              user-friendly interface, you can browse movies by genre, release
              year, rating, and even add them to your personal watchlist.</i>
            </p>
            <p className="md:text-lg lg:text-xl opacity-80 leading-relaxed">
            <i>  We believe everyone deserves to experience the magic of cinema in
              the best way possible. Our goal is to help you find movies you
              love with minimal effort. From casual viewers to hardcore
              cinephiles, FlixNectar makes movie discovery fun and intuitive.</i>
            </p>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <img
              src={about}
              referrerPolicy="no-referrer"
              alt="Cinematic Experience"
              className="w-full lg:h-80 rounded-xl shadow-xl "
            />
          </div>
        </div>

        {/* Key Features Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-8">
            Key Features
          </h2>
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12`}>
            {/* Feature 1 */}
            <div className={`flex flex-col items-center shadow-2xl shadow-primary 
            rounded-xl  p-8 
                 ${isToggled ? 
                 "bg-[#ffffff] text-darkSlate" : "bg-card text-ivory"}`}>
              <i className="text-5xl mb-4">📺</i>
              <h3 className="text-2xl font-semibold mb-3">
                Wide Movie Selection
              </h3>
              <p className="text-center">
                From new releases to timeless classics, we have a vast
                collection of movies for every taste.
              </p>
            </div>
            {/* Feature 2 */}
            <div className={`flex flex-col items-center shadow-2xl shadow-primary 
             p-8 
                
                 ${isToggled ?
                  "bg-[#ffffff] text-darkSlate" : "bg-card text-ivory"}`}>
              <i className="text-5xl mb-4">🔍</i>
              <h3 className="text-2xl font-semibold mb-3">
                Smart Search
              </h3>
              <p className="text-center">
                Easily find movies with advanced search filters: by genre,
                rating, duration, and more.
              </p>
            </div>
            {/* Feature 3 */}
            <div className={`flex flex-col items-center shadow-2xl shadow-primary rounded-xl
             p-8 
                transform hover:scale-105 transition-all duration-300 
                ${isToggled ? 
                "bg-[#ffffff] text-darkSlate" : "bg-card text-ivory"}`}>
              <i className="text-5xl mb-4">💾</i>
              <h3 className="text-2xl font-semibold mb-3">
                Personal Favorite List
              </h3>
              <p className="text-center ">
                Keep track of movies you want to watch by adding them to your
                personal favorite list.
              </p>
            </div>
          </div>
        </div>

        {/* Mission and Vision Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-8">
            Our Mission & Vision
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-center gap-5">
            {/* Mission */}
            <div className={`md:w-1/2 p-6 shadow-2xl  shadow-primary rounded-xl 
                 ${isToggled ?
                  "bg-[#ffffff] text-darkSlate" : "bg-card text-ivory"}`}>
              <h3 className="text-2xl font-semibold mb-4">
                Mission
              </h3>
              <p className="text-lg ">
                Our mission is to create an engaging movie platform where users
                can find movies quickly and easily, with a seamless browsing
                experience.
              </p>
            </div>
            {/* Vision */}
            <div className={`md:w-1/2 p-6 shadow-2xl shadow-primary rounded-xl 
                ${isToggled ? 
                "bg-[#ffffff] text-darkSlate" : "bg-card text-ivory"}`}>
              <h3 className="text-2xl font-semibold mb-4">
                Vision
              </h3>
              <p className="text-lg ">
                We envision becoming the top choice for movie lovers around the
                world, providing entertainment through a wide array of cinematic
                content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
