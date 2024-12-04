import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AllMovies from "../pages/AllMovies";
import AddMovie from "../pages/AddMovie";
import MyFavorites from "../pages/MyFavorites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('http://localhost:5000/movie')
      },
      {
        path: "/allMovies",
        element: <AllMovies></AllMovies>,
        loader: ()=> fetch('http://localhost:5000/allMovie')
      },
      {
        path: "/addMovie",
        element: <AddMovie></AddMovie>,
      },
      {
        path: "/myFavorites",
        element: <MyFavorites></MyFavorites>,
      },
      // {
      //   path: "/extra route",
      //   element:<Home></Home> ,
      // },
       {
        path: "/",
        element:<Home></Home> ,
      },
    ],
  },
]);

export default router;
