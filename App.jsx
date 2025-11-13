import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import UserContext from './Context/UserContext'
import ThemeContext from './Context/ThemeContext'
import toggleTheme from './Components/ToggleTheme'
import ToggleTheme from './Components/ToggleTheme'


function App() {


const [user, setUser]= useState({
  userName: "", 
  isLoggedIn: false 
})

const [currentTheme, setTheme]= useState("light")
// best place to set up the state for the entire application

  return (
    <>
      <h1> Context! </h1> 
      {/* Step 2, provide the context */}
      {/* wrap your application in the context you want to provide 
      and use value to link context to the state you want to keep track 
      of, in this case, the user state and setUser function */}
      <UserContext value={{user, setUser}}>  
      <ThemeContext value={{currentTheme, toggleTheme: setTheme}}>
      <Routes> 
      <Route path='/' element={<Home/>} value={<ToggleTheme/>} /> 
      <Route path='/login' element={<Login/>} /> 
      </Routes>
      </ThemeContext>
      </UserContext>

    </>
  )
}

export default App
