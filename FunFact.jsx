import React from "react";

const FunFact = () => {
  const funFacts = [
    {
      id: 1,
      species: "platypus",
      text: "The plural of platypus is platpyii (?)",
    },
    { id: 2, species: "Cheetah", text: "Cheetah's can run up to 500mph" },
    {
      id: 3,
      species: "Bear",
      text: "Bears are not real! They are only a figment of your imagination",
    },
  ];
  //iterating through props w map
  // it goes through each element within an array with map
  //creates a structure in html for how it's displayed
  // you can utilize the parameter in the callback function to represent
  // the individual array item and display the specific info from your data
  // typically the data you'll be working with 
  // is objects (sometimes strings/numbers)


  // most common way to add the below:
  const funFactElements= funFacts.map((fact)=>(
    <div> 
        <div key={fact.id}>
        <h3> Animal type: {fact.species} </h3>
        <p> Fact: {fact.text} </p></div>
    </div>
  ))
  return <> {funFactElements} </>
};

export default FunFact;
