import { createContext } from "react";


// doesn' actually access data below, but builds good foundation 
// Step 1. Create the Context 
//import createContext from React, then utilize Createcontext 
// to create context that will keep track of the designated state
//inside createContext, insert default values you want to keep track of 
// a user state object and a setUser state function
const UserContext= createContext({
    user: {username: "", isLoggedIn: false},
    setUser: ()=> {},
})


export default UserContext;

//pascal case for context, First letter caps