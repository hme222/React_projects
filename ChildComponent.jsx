import React, { useEffect, useState } from "react";

const ChildComponent = () => {
  //https://swapi.info/api/people

  // store the data that we get back from the API
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://swapi.info/api/people");
      const result = await response.json();

      // set our data state equal to the result we get back from the API
      setData(result);
    };

    fetchData();
  }, []);
  // the separation function is to allowed for the async function 
  // async allows us to get access to it 

  return (
    <>
      {data.map((character) => (
        <div className="data-item">
          <h3>Name: {character.name}</h3>
          <p>Height: {character.height}</p>
          <p>Mass: {character.mass}</p>
          <p>Hair Color: {character.hair_color}</p>
        </div>
      ))}
    </>
  );
};

export default ChildComponent;
