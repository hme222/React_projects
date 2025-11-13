import React, { useState } from "react";
import Game from "./Game";
import { Link } from "react-router-dom";

const GameList = ({ games }) => {

  return (
    <>
      <div>GameList</div>
      {games.map((game) => (
        // dynamically send which id to change in the URL
        <Link to={`/games/${game.id}`}>
          <Game key={game.id} game={game} />
        </Link>
      ))}
    </>
  );
};

export default GameList;