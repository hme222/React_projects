import React, { useState } from "react";

const Hello = () => {
  const [name, setName] = useState("Jeff!");
  const [submitName,setSubmitName] = useState("");
  const [age, setAge] = useState(0)
  const [submitAge, setSubmitAge] = useState("");

  // event gets passed in when we utilize our OnSubmit
  const handleSubmit = (event) => {
    // // event.preventDefault()
    // - prevents the page from refreshing by default when we click submit
    event.preventDefault();
    console.log("submit clicked!");
// change the submitName to equal 
// whatever the name state is equal to at the time of submit
    setSubmitAge(age)
    setSubmitName(name)
    setName("")
    setAge("")
  };


  return (
    <>
      {/* Form  */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor=""> Enter Your Name: </label>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          {/* onChange={(event)=> setName(event.target.value)}- 
changes "useState" to current text typing in textbox */}
        </div> 
        <div> 
            <label htmlFor=""> Age: </label>
        <input 
            type= "number"
            value={age}
            onChange={(event) => setAge(event.target.value)}
        />
        </div>
        <button> Submit </button>
      </form>
      <h2> Hello {submitName}! </h2>
      <p> You are {submitAge} years old!</p>
    </>
  );
};

export default Hello;
