/* eslint-disable react/prop-types */
// import React from 'react';

const Heading = ({ title, subtitle }) => {
    return (
        <div className='flex flex-col w-full justify-center items-center my-12
        '>
        <h1 className='text-3xl md:text-5xl lg:text-7xl font-bold mb-4 text-primary
         active '>
          {title}
        </h1>
       
        <p className='text-xs  lg:text-lg px-5  md:px-20 lg:px-52 text-primary  text-center font-thin'>
         {subtitle}
        </p>
      </div>
    );
};

export default Heading;