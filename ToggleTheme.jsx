import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

const ToggleTheme = () => {

  const { currentTheme, toggleTheme } = useContext(ThemeContext);

  const handleTheme = () => {
    if(currentTheme=== "light") {
        toggleTheme("dark"); 
    }
    else {
        toggleTheme("light")
    }
  };

  return (
    <>
      <button onClick={handleTheme}> Click here to change the ~theme~ </button>
    </>
  );
};

export default ToggleTheme;
