

import { useContext } from "react";
import { ThemeContext } from "../../provider/ThemeProvider";
import { Link } from "react-router-dom";

const Footer = () => {
  const { isToggled } = useContext(ThemeContext);
    return (
      <div className={`mt-20 py-10 ${isToggled ? "bg-white text-darkSlate" : "bg-black text-ivory"}`}> {/* Toggle background and text color based on mode */}
      <footer className="footer text-base-content p-10 container mx-auto">
          <nav>
            <div className=" w-full md:w-60 lg:w-96">
            <h4 className={`text-2xl font-bold active ${isToggled ? "text-primary" : "text-ivory"}`}>{/* Change text color */}
            FlixNectar
            </h4>
            <p className={`${isToggled ? "text-darkSlate opacity-70" : "text-ivory opacity-50"}`}>
              At FlixNectar, we bring the world of cinema to you. Discover, explore, 
              and enjoy your favorite movies with ease. Whether you are looking for the
               latest releases or your all-time favorites, our user-friendly platform 
               makes movie browsing simple and fun. 
              </p>
            </div>
          </nav>
          <nav>
            <h4 className={`text-2xl font-bold active ${isToggled ? "text-primary" : "text-ivory"}`}>
              Quick Links
            </h4>
            <Link to="/about" 
            className={`${isToggled ? "text-darkSlate opacity-70" : "text-ivory opacity-50"}`}>
            About Us</Link>
            <Link to="/support"
            className={`${isToggled ? "text-darkSlate opacity-70" : "text-ivory opacity-50"}`}>
              Support</Link>
           
            <Link to="/contact"
            className={`${isToggled ? "text-darkSlate opacity-70" : "text-ivory opacity-50"}`}>
              Contact</Link>
          </nav>
          <nav>
          <h6 className={`text-2xl font-bold active ${isToggled ? "text-primary" : "text-ivory"}`}>
            Social</h6>
            <div className="grid grid-flow-col gap-4">
              <a href="https://twitter.com"
              className={`${isToggled ? "text-darkSlate" : "text-ivory"}`}
               >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a href="https://youtube.com" 
              className={`${isToggled ? "text-darkSlate" : "text-ivory"}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a href="https://facebook.com" 
              className={`${isToggled ? "text-darkSlate" : "text-ivory"}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </nav>
          
        </footer>
        <div className={` mb-10 w-11/12 mx-auto border-t-2 border-dashed ${isToggled ?
           " border-darkSlate opacity-60"  : 
           " border-ivory opacity-40"}`}></div>
        <aside className="text-center text-xl text-black">
        <p className={` active ${isToggled ? "text-primary " : "text-ivory"}`}>
        Copyright © {new Date().getFullYear()} - All right reserved by <i> FlixNectar</i></p>
    </aside>
      </div>
    );
};

export default Footer;