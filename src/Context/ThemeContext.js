import { createContext } from "react";

const ThemeContext= createContext({
    currentTheme: "light",
    toggleTheme: ()=> {},
})

export default ThemeContext;

//Context's must match useState's 
