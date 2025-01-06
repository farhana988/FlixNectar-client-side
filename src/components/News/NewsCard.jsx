/* eslint-disable react/prop-types */

import { FaLongArrowAltRight } from "react-icons/fa";


const NewsCard = ({item,isToggled}) => {
    return (
        <div>
              <div
               
                className={`card card-compact h-[400px] shadow-xl shadow-primary ${
                  isToggled
                    ? "bg-[#ffffff] text-darkSlate"
                    : "bg-card text-ivory"
                }`}
              >
                <figure>
                  <img
                    className="  w-10/12 h-40 rounded-xl mt-7"
                    src={item.image}
                    alt={item.title}
                  />
                </figure>
                <div className="px-8 flex flex-col flex-grow gap-1">
                  <h2
                    className="text-lg  lg:text-2xl font-bold mt-3
          
          "
                  >
                    {item.title}
                  </h2>

                  <p className="font-semibold opacity-50 text-sm lg:font-bold lg:text-lg  flex-grow">
                    {item.description}
                  </p>

                  <div className="card-actions justify-end pb-6">
                    <button
                      className="shadow-2xl shadow-primary border-2 rounded-2xl px-4 flex items-center
            gap-3 text-xl font-bold"
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