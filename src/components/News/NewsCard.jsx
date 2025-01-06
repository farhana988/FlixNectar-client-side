/* eslint-disable react/prop-types */

import { FaLongArrowAltRight } from "react-icons/fa";

const NewsCard = ({ item, isToggled }) => {
  return (
    <div>
      <div
        className={`card card-compact h-[205px] md:h-[255px] lg:h-[330px]
                   shadow-xl shadow-primary ${
                     isToggled
                       ? "bg-[#ffffff] text-darkSlate"
                       : "bg-card text-ivory"
                   }`}
      >
        <figure>
          <img
            className="w-full   h-24 md:h-32 lg:h-44"
            referrerPolicy="no-referrer"
            src={item.image}
            alt={item.title}
          />
        </figure>
        <div className="mx-3 lg:mx-5  flex flex-col flex-grow gap-1">
          {/* title */}
          <h2
            className="text-sm  md:text-base lg:text-xl font-bold mt-3"
            title={item.title}
          >
            {item.title?.substring(0, 20)}
          </h2>

          {/* description */}
          <p
            className=" font-semibold text-xs lg:font-bold  md:text-sm lg:text-base
            flex-grow opacity-70"
          >
            {item.description?.substring(0, 40)}
          </p>

          <div className="card-actions justify-end pb-3 lg:pb-5">
            <button
              className="shadow-2xl shadow-primary border-2 rounded-2xl px-4 flex 
              items-center gap-3  text-xs md:text-sm lg:text-basefont-bold"
            >
              Read More
              <FaLongArrowAltRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
