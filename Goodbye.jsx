import React from 'react'

const Goodbye = ({name, goodbye}) => {
  return (
    <div>
        <button onClick={goodbye}> Adios {name} </button> </div>
  )
}


export default Goodbye