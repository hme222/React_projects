import React, { useState } from 'react'

const LightSwitchCounter = () => {

const [count, setCount ]= useState(0)
const [toggle, setToggleHandler ]= useState(true)


const switchOnOff= () => {
  setToggleHandler(toggle !== true) 
  setCount(count + 1)
 }
 
return (
    <> 
    <h1>Light Switch Counter </h1>
    <button onClick={switchOnOff}> {toggle ? "ON" : "OFF"} </button>
    <p> Switch Count: {count} </p>
    </>
    
  )

}

  


export default LightSwitchCounter