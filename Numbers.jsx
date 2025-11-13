import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNumber, removeNumber } from '../features/counterSlice';


const Numbers = () => {
//access numbers from my global state

const numbers=useSelector((state)=> state.counter.numbers)

const dispatch=useDispatch();

const handleAddRandom= () => {
    const random= Math.ceil(Math.random()*100)
    //send this random to our numbers state via dispatch 
    dispatch(addNumber(random))
}

const handleRemoveNumber= () => {
    dispatch(removeNumber())
} 
// dispatch(variable())

  return (
    <>
    <div> [{numbers.map((num)=> (
       <span> {num}, </span>
    ))}] </div>
    <button onClick={handleAddRandom}> Random Number </button>
    <button onClick={handleRemoveNumber}> Remove last Number </button>
    </>
  )
}

export default Numbers