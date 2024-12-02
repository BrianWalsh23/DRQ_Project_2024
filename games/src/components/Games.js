import React from 'react';

const Games = ({ games }) => {
  return (
    <div>
      {games.map((game) => (
        <div key={game.gameID} style={{ marginBottom: '20px' }}>
          <img 
            src={game.Poster} 
            alt={game.Title} 
            style={{ width: '150px', height: '225px' }} 
          />
          <h2>{game.Title} ({game.Year})</h2>
          <p>Game ID: {game.gameID}</p>
          <p>Type: {game.Type}</p>
        </div>
      ))}
    </div>
  );
};

export default Games;
