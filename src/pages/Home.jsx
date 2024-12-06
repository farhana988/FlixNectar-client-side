
import Banner from "../components/Banner";
import Upcoming from "../components/Upcoming";
import News from "../components/News";
import FeaturedMovies from "../components/FeaturedMovies";
// import Theme from "../components/Theme";


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
