import React from 'react'

const Actor = ({actor}) => {
  return (
    <div>
        <h2>Name: {actor.name} 
            <p> Age: {actor.age} </p>
            </h2> </div>
  )
}

// you can do (props) or the above to access the same data 
// then {props.actor.name} OR the shorter router above by accessing the object

export default Actor 
