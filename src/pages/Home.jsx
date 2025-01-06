
import Banner from "../components/Banner";
import FeaturedMovies from "../components/FeaturedMovies";
import News from "../components/News/News";
import Upcoming from "../components/UpcomingReleases/Upcoming";

const Home = () => {

  return (
    <div>
      <Banner></Banner>
      <FeaturedMovies></FeaturedMovies>
      <Upcoming></Upcoming>
      <News></News>

      
    </div>
  );
};

export default Home;
