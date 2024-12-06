// import React from 'react';

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Theme from "../components/Theme";
import Snowfall from "react-snowfall";


const MainLayout = () => {
  return (
    <div className="h-full relative">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Theme></Theme>
      <Footer></Footer>



      {/* Snowfall Component */}
      <Snowfall
        snowflakeCount={200}
        className="absolute top-0 left-0 w-full h-full"
        style={{ pointerEvents: "none" }}
      />

    </div>
  );
};

export default MainLayout;
