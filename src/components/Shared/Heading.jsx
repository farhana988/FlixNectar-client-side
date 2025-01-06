/* eslint-disable react/prop-types */
// import React from 'react';

import { useContext } from "react";
import { ThemeContext } from "../../provider/ThemeProvider";


const Heading = ({ title, subtitle }) => {
  const { isToggled } = useContext(ThemeContext);
    return (
        <div className='flex flex-col w-full justify-center items-center my-12
        '>
       <h1
        className={`text-3xl md:text-5xl lg:text-7xl font-bold mb-4 
          ${isToggled ? "text-primary" : "text-ivory"} active`} 
      >
          {title}
        </h1>
       
        <p
        className={`text-xs lg:text-lg px-5 md:px-20 lg:px-52 text-center font-thin
          ${isToggled ? "text-primary opacity-75" : "text-ivory opacity-75"}`} 
      >
         {subtitle}
        </p>
      </div>
    );
};

export default Heading;