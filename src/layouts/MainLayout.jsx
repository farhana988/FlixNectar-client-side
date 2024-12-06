// import React from 'react';

import { Outlet,  } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Theme from "../components/Theme";



const MainLayout = () => {
   
    return (
        <div>
            <Navbar></Navbar> 
           
            <Outlet></Outlet>
            <Theme></Theme>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;