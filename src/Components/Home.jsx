import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../Context/UserContext";
import ToggleTheme from "./ToggleTheme";
import ThemeContext from "../Context/ThemeContext";

const Home = () => {

  //Step 3. Use Context
// utilize the useContext to select context you want to 
// access data from (in this case, useContext)
// then you are free to use any of the 
// variables/functions you set up in context
  const { user } = useContext(UserContext);

  const {currentTheme}= useContext(ThemeContext)

  return (
    <>
    <ToggleTheme/>
    <h2> Theme: {currentTheme} </h2>
      {!user.isLoggedIn ? (
        <div>
          <h4> Please Login to view your information </h4>
          <Link to="/login">
            <button> LOGIN </button>
          </Link>
        </div>
      ) : (
        <div> Welcome {user.username} to the COOLEST context application!!</div>
      )}
    </>
  );
};

export default Home;


/* 
Theme Context 
- should keep track of an object with two properties,
 current theme as well as a toggleTheme function

 -theme should be equal to light (by default), 
 upon clicking the toggle button will change the theme to dark 

 - need to create a themeState in the App.jsx that will be shared across
 application utilizing context

 -will need a toggleTheme button which you can create on it's own 
 or create a dedicated component for it 

 -currently, we dont have CSS to showcase the change, 
 so instead inside both home/jsx/login include an element 
 that showcases the current theme (ex: <h2> current theme </h2>)

*/ 
