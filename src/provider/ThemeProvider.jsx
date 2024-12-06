/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {

  const storedBackground = localStorage.getItem("bgColor") === "white";
  

  const [isToggled, setIsToggled] = useState(storedBackground);

  const handleToggle = () => {
    setIsToggled(prevState => !prevState);
  };

  useEffect(() => {
    if (isToggled) {
      localStorage.setItem("bgColor", "white");
      document.body.classList.add("bg-white", "text-darkSlate");
      document.body.classList.remove("bg-black", "text-ivory");
    } else {
      localStorage.setItem("bgColor", "black");
      document.body.classList.add("bg-black", "text-ivory");
      document.body.classList.remove("bg-white", "text-darkSlate");
    }

    return () => {
      document.body.classList.remove("bg-black", "bg-white", "text-ivory", "text-darkSlate");
    };
  }, [isToggled]);

  return (
    <ThemeContext.Provider value={{ isToggled, handleToggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
