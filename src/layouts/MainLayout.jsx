// import React from 'react';

import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import Snowfall from "react-snowfall";
import Footer from "../components/Shared/Footer";



const MainLayout = () => {
  return (
    <div className="h-full relative">
      <Navbar></Navbar>
      <Outlet></Outlet>
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
