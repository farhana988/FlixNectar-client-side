import { useState } from "react";
import Heading from "./Shared/Heading";
import newsletter from "../assets/newsletter.webp";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailPattern.test(email)) {
      setIsSubscribed(true);
      setError("");
    } else {
      setError("Please enter a valid email address.");
    }
  };

  return (
    <div className="container mx-auto">
      <Heading
        title={"Newsletter"}
        subtitle={"If you haven't subscribed yet, please subscribe now."}
      ></Heading>
      <div
        className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between
       relative rounded-2xl"
        style={{
          backgroundImage: `url(${newsletter})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
 {/* Overlay for background image */}
 <div className="absolute inset-0 rounded-2xl bg-black opacity-60 z-0"></div>

        {/* Form Content */}
        <div className={"lg:w-1/2 mx-auto text-center  py-12 px-6 opacity-90 text-white"}>
          <h2 className="text-4xl font-semibold mb-6 leading-tight">
            Get the Latest Movie News and Offers!
          </h2>
          <p className="text-lg mb-8 ">
            Join our newsletter to get exclusive movie releases, special offers,
            and updates directly in your inbox.
          </p>

          {/* Subscription Form */}
          <form
            onSubmit={handleSubmit}
            className="flex justify-center lg:justify-start items-center space-x-4"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="py-3 px-6 w-full lg:w-80 rounded-full text-lg text-darkSlate
               "
              placeholder="Enter your email"
              required
            />
            <button
              type="submit"
              className="bg-primary text-white py-3 px-6 rounded-full
             font-bold"
            >
              Subscribe
            </button>
          </form>

          {/* Message */}
          {isSubscribed && (
            <div className="mt-4 text-green-400">
              <p>
                Thank you for subscribing! Stay tuned for updates in your inbox.
              </p>
            </div>
          )}

          {error && (
            <div className="mt-4 text-red-500">
              <p>{error}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
