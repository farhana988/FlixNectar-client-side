import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../provider/ThemeProvider";
import Heading from "../Shared/Heading";
import { Link } from "react-router-dom";

const Subscription = () => {
  const { isToggled } = useContext(ThemeContext);
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const fetchSubs = async () => {
      const response = await fetch("./subscription.json");
      const data = await response.json();
      setPlans(data);
    };

    fetchSubs();
  }, []);

  return (
    <div className="py-20">
      <div className="container mx-auto px-6 lg:px-0">
        {/* Title Section */}
        <Heading
          title={"Subscription Plan"}
          subtitle={
            "At FlixNectar, we offer flexible subscription plans that suit your needs. Start enjoying movies right away."
          }
        ></Heading>

        {/* Subscription Plans */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`card shadow-xl shadow-primary rounded-xl overflow-hidden ${
                isToggled ? "bg-[#ffffff] text-darkSlate" : "bg-card text-ivory"
              } relative flex flex-col justify-between`}
            >
              {/* Price Badge */}
              <div
                className={`absolute top-4 right-4 text-white badge badge-lg bg-primary 
                    text-xs lg:text-base`}
              >
                ${plan.price}
              </div>
              <div className="px-4 lg:px-6 py-4 flex flex-col justify-between gap-1
             h-[270px] md:h-80 lg:h-[329px]">
                {/* Name */}
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">{plan.name}</h3>
                {/* Description */}
                <p className="text-xs md:text-sm lg:text-base opacity-90">
                  {plan.description}
                </p>
                {/* Features List */}
                <ul className="list-disc pl-4 mb-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="text-xs md:text-sm lg:text-base opacity-80">
                      {feature}
                    </li>
                  ))}
                </ul>
                {/* Button Section */}
                <div className="mt-auto text-center">
                  <button className="border px-2 rounded-full font-bold text-xs lg:text-base">
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="text-center mt-10">
          <p className="text-xs md:text-sm lg:text-lg">
            Don&#39;t know which plan to choose? Contact our support team for
            help!
          </p>
          <div className="">
            <button    className="mr-7 lg:mr-0 btn  text-white lg:text-xl mt-5
          btn-xs md:btn-sm lg:btn-md bg-primary ring-2 ring-offset-4 ring-primary"
        >
              <Link to='/contact'>Contact Support</Link>  </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
