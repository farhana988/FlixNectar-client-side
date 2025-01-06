import Banner from "../components/Banner";
import Blog from "../components/Blog";
import FeaturedMovies from "../components/FeaturedMovies";
import News from "../components/News/News";
import Newsletter from "../components/Newsletter";
import Subscription from "../components/Subscription/Subscription";
import Testimonials from "../components/Testimonials";
import Upcoming from "../components/UpcomingReleases/Upcoming";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedMovies></FeaturedMovies>
      <Upcoming></Upcoming>
      <News></News>
      <Subscription></Subscription>
      <Testimonials></Testimonials>
      <Blog></Blog>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
