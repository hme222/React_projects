import React, {useState, useContext} from 'react'
import UserContext from '../Context/UserContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {

const [text, setText]= useState("")
const { setUser }= useContext(UserContext)
//set up the hook that will re-direct the user to a diff page in application 
const navigate= useNavigate();
//navigate is just having us move to a diff page 

const handleSubmit=(event)=> {
    event.preventDefault()
    //update the user in context with the new name/true login status 
    setUser({username: text, isLoggedIn: true}) 
    navigate("/")
}

  return (
    <>
    <h3> Login: </h3>
        <form onSubmit={handleSubmit}> 
        <label> Enter your Username: </label>
        <input type="text" autoComplete='off'
         value={text} onChange={(event)=>setText(event.target.value)} />  
         {/* start to memorize, event and event.target.value  */}
        <button> Login </button> 
        </form> 
     </>
  )
}

export default Login