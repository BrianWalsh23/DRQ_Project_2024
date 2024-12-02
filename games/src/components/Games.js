import React from 'react';
import GameItem from './GameItem';

function Games(props) {
  const myGames = props.myGames || []; // Default to an empty array if undefined

  return (
    <>
      {myGames.map((game) => (
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
