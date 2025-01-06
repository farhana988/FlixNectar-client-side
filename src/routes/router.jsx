import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";

import AddMovie from "../pages/AddMovie";
import MyFavorites from "../pages/MyFavorites/MyFavorites";
import Details from "../pages/MovieDetails/Details";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import Update from "../pages/MovieDetails/Update";
import WatchParty from "../pages/WatchParty";
import AllMovies from "../pages/AllMovies/AllMovies";
import AllUpcoming from "../components/UpcomingReleases/AllUpcoming";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import Support from "../pages/Support";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://assi10-api.vercel.app/movie"),
      },
      {
        path: "/allMovies",
        element: <AllMovies></AllMovies>,
        loader: () => fetch("https://assi10-api.vercel.app/allMovie"),
      },
      {
        path: "/addMovie",
        element: (
          <PrivateRoute>
            <AddMovie></AddMovie>
          </PrivateRoute>
        ),
      },
      {
        path: "/myFavorites/:email",
        element: (
          <PrivateRoute>
            <MyFavorites></MyFavorites>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://assi10-api.vercel.app/favorites/${params.email}`),
      },
      {
        path: "/watch",
        element: <WatchParty></WatchParty>,
        loader: () => fetch("./watch.json"),
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
     
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
     
      },
      {
        path: "/support",
        element: <Support></Support>,
     
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(`https://assi10-api.vercel.app/movie/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(`https://assi10-api.vercel.app/movie/${params.id}`),
      },

      {
        path: "/allUpcoming",
        element: <AllUpcoming></AllUpcoming>,
      },
    ],
  },
]);

export default router;
