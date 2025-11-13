import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {increment, decrement, incrementByAmount} from '../features/counterSlice'

const Counter = () => {
//get access to the count State from our store 
// ALWAYS uses the first state=> state. variablefrom reducer. value from reducer 
//userSelector allows us to specify the state we are accessing
const count = useSelector((state)=> state.counter.value)

//sets up our dispatch whicch gives us the ability to modify our state by dispatching
//actions that will call our reducer function 
const dispatch= useDispatch();

dispatch

  return (
    <>
    <h2> Counter: {count} </h2>
    <button onClick={()=>dispatch(increment())}> Increment </button>
{/* technically passing the action is getting dispatched bove within the new variable */}
    <button onClick={()=>dispatch(decrement())}> Decrement</button>
    <button onClick={()=>dispatch(incrementByAmount(10))}> Increment by Amount </button>
    </>
  )
}

export default Counter