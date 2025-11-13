import { useParams } from "react-router-dom";

const GameInfo = ({ games }) => {
    // allows us to access dynamic parameters from the URL  
    const { id } = useParams() 

  return (
    <>
      <h1>{id}. Title: {games[id-1].title}</h1>
      <p>Rating: {games[id-1].rating}</p>
    </>
  );
};

export default GameInfo;
