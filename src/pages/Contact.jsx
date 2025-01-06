import { useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../provider/ThemeProvider";
import { useContext } from "react";
import map from "../assets/map.jpg"
import Heading from "../components/Shared/Heading";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const { isToggled } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" }); 
  };

  return (
    <div
      className={`py-20`}
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Title Section */}
        <Heading
        title={' Get in Touch'}
        subtitle={'Have questions or suggestions? Wed love to hear from you!'}
        ></Heading>
       

        <div className="lg:flex justify-between space-y-10 lg:space-y-0 gap-7">
          {/* Contact Information */}
          <div className="lg:w-1/3  rounded-lg transform hover:scale-105 
          transition-all duration-300 shadow-xl p-8 shadow-primary">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <i className="text-xl mr-4">📧</i>
                <span className="text-lg">contact@flixnectar.com</span>
              </li>
              <li className="flex items-center">
                <i className="text-xl mr-4">📞</i>
                <span className="text-lg">+123 456 7890</span>
              </li>
              <li className="flex items-center">
                <i className="text-xl mr-4">🏠</i>
                <span className="text-lg">
                  123 Movie Lane, Cinepolis, Film City
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3 rounded-lg transform hover:scale-105 
          transition-all duration-300 shadow-xl p-8 shadow-primary">
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-3 border-2 rounded-lg ${
                    isToggled
                      ? "bg-[#ffffff] text-darkSlate" 
                      : "bg-card text-ivory"
                  }`}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 border-2 rounded-lg ${
                    isToggled
                      ? "bg-[#ffffff] text-darkSlate" 
                      : "bg-card text-ivory"
                  }`}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full p-3 border-2 rounded-lg ${
                    isToggled
                      ? "bg-[#ffffff] text-darkSlate" 
                      : "bg-card text-ivory"
                  }`}
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className={`btn px-8 py-3 text-lg bg-primary text-white`}
                >
                  Send Message
                </button>
                {submitted && (
                  <p className="mt-4 text-green-500 text-lg font-semibold">
                    Your message has been sent successfully!
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold mb-6">Follow Us</h3>
          <div className="flex justify-center space-x-8">
            <Link
              to="https://facebook.com"
              className="text-2xl hover:text-primary transition-colors duration-300"
            >
              <FaFacebook></FaFacebook>
            </Link>
            <Link
              to="https://twitter.com"
              className="text-2xl hover:text-primary transition-colors duration-300"
            >
              <FaTwitter></FaTwitter>
            </Link>
            <Link
              to="https://instagram.com"
              className="text-2xl hover:text-primary transition-colors duration-300"
            >
              <FaInstagram></FaInstagram>
            </Link>
            <Link
              to="https://linkedin.com"
              className="text-2xl hover:text-primary transition-colors duration-300"
            >
              <FaLinkedin></FaLinkedin>
            </Link>
          </div>
        </div>

        {/* Map or Location */}
        <div className="mt-16">
          <h3 className="text-2xl lg:text-4xl font-semibold text-center mb-6">
            Our Location
          </h3>
          <div className="flex justify-center">
            <img
              src={map}
              referrerPolicy="no-referrer"
              alt="Map or Office Location"
              className="w-full lg:w-1/2 rounded-xl shadow-xl  shadow-primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
