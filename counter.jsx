import { useState } from 'react'

const counter = () => {
// create a state variable !!!

//usestate- React Hook that gives us access to our state
//const [stateVariable, setStateFunction]= useState(defaultValue)
// state variable- variable that keeps track of our state 
// state function - function that modifies the state variable and 
//triggers as re-render 

//state is for dynamic variables
//whenever state is changed, a re-render occurs 

// const [variablename, setvariablename] =useState (default value)
// in our case, count is our state variable, setCount is our setState
// function, and 0 is our default value 
// useState is ALWAYS const ** 
//for setvariables, we always have to use callback functions within

const [count, setCount ]= useState(0)

const addOne= () => {
    //setCount (and all setStateFunctons)- are all asynchronous !!
    setCount(count +1 ); // never use count++ 
    // console.log(count)
}

const subtractOne= () => {
    if(count > 0) {
    setCount(count -1)
    }
}
// once you add logic, bring above return, instead of below

const reset= () => {
    setCount(0) // this is setting the count= 0
}


  return (
    <>
      <h1> Counter: {count} </h1>
      {/* <button onClick={()=>setCount(count + 1)}> Add one! </button> */}
      <button onClick={addOne}> Add one!</button>
      {/* <button onClick={()=>setCount(count - 1)} > Subtract one! </button> */}
      <button onClick={subtractOne}> -1 </button>
      <p></p>
      <button onClick={reset}> Reset </button>
    </>
  )
}
// we set the count state= setcount 

export default counter