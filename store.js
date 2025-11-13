// always start with one store, to keep information
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counterSlice'

// store.js keeps track of our global state and the 
// reducers/slices that we use to modify the state 
//the store gets provided to the entire application 
//so that the global state can always be accessed/modified 
//to set it up, we utilize configureStore and pass in 
//the reducers that we want to utilize throughout the app 

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})