import React from 'react'

const Greeting = ({greet, name}) => {
 //props.greet

// using the attributes of the buttons 
  return (
    <>
    <div>
       <button onClick={greet}> Greet {name} </button> 
    </div>
    </>
  )
}
// or (props) up top
// used below {props.greet} & {props.name} to cite info 

export default Greeting