import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AllMovies from "../pages/AllMovies";
import AddMovie from "../pages/AddMovie";
import MyFavorites from "../pages/MyFavorites";
import Details from "../components/Details";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import Update from "../components/Update";
import WatchParty from "../pages/WatchParty";


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
        element: <PrivateRoute><AddMovie></AddMovie></PrivateRoute> ,
      },
      {
        path: "/myFavorites/:email",
        element: <PrivateRoute><MyFavorites></MyFavorites></PrivateRoute> ,
        loader: ({params})=> fetch(`http://localhost:5000/favorites/${params.email}`)
      },
      {
        path: "/watch",
        element:<WatchParty></WatchParty> ,
        loader: ()=>fetch('./watch.json')
      },
       {
        path: "/details/:id",
        element:<PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/movie/${params.id}`)
      },
      {
        path: "/login",
        element:<Login></Login> ,
      },
      {
        path: "/register",
        element:<Register></Register> ,
      },
      {
        path: 'update/:id',
        element: <Update></Update>,
        loader: ({params})=> fetch(`http://localhost:5000/movie/${params.id}`)
      },
     
     
    ],
  },
]);

export default router;
