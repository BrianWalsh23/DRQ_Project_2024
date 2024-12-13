import React from 'react';
import GameItem from './GameItem';

function Games(props) {
  const myGames = props.myGames || []; // Default to an empty array if empty

  return (
    <>
      {/* Games component maps over the list of games and renders a gameItem for each one */}
      {props.myGames.map((game) => (
        <GameItem
          myGame={game}
          key={game._id}
          Reload={props.ReloadData}
        />
      ))}
    </>
  );
}

export default Games;
