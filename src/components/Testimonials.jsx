import { useState, useEffect, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import Heading from "./Shared/Heading";
import { ThemeContext } from "../provider/ThemeProvider";

const Testimonials = () => {
      const { isToggled } = useContext(ThemeContext);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const response = await fetch("./testimonials.json");
      const data = await response.json();
      setTestimonials(data);
    };
    fetchTestimonials();
  }, []);

  return (
    <div className="text-center container mx-auto px-6 lg:px-0">
      <Heading
      title={'What Our Customers Say'}
      ></Heading>

  
      <Swiper
        spaceBetween={20}
        slidesPerView={4} 
        loop={true} 
        navigation={true} 
        breakpoints={{
          425: {
            slidesPerView: 2, 
          },
          768: {
            slidesPerView: 3, 
          },
          1024: {
            slidesPerView: 4, 
          },
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className={`max-w-xs  shadow-xl shadow-primary rounded-xl p-3 lg:p-6 space-y-4
            h-60 md:h-64 lg:h-80 ${
                isToggled ? "bg-[#ffffff] text-darkSlate" : "bg-card text-ivory"
              }`}>
              {/*  Photo */}
              <img
                src={testimonial.photo}
                alt={`${testimonial.name}'s photo`}
                className="w-20 md:w-24 md:h-24 rounded-full mx-auto"
              />
              {/*  Review */}
              <p className="text-xs md:text-sm lg:text-lg italic "
              title={testimonial.review}>
                {testimonial.review?.substring(0,80)}
                </p>
              {/*  Name & Designation */}
              <div className="text-center">
                <h3 className="font-semibold 
             md:text-lg lg:text-xl">
                    {testimonial.name}</h3>
                <p className="text-xs lg:text-sm ">{testimonial.designation}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
