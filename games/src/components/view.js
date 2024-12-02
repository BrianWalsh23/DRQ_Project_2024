import React from 'react';
import Games from './Games'; // Assuming Games is a separate component

const Read = () => {
  // Game data
  const gamesData = [
    {
      "Title": "Avengers: Infinity War",
      "Year": "2018",
      "gameID": "tt4154756",
      "Type": "game",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    },
    {
      "Title": "Captain America: Civil War",
      "Year": "2016",
      "gameID": "tt3498820",
      "Type": "game",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    },
    {
      "Title": "World War Z",
      "Year": "2013",
      "gameID": "tt0816711",
      "Type": "game",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
    }
  ];

  return (
    <div>
      <h1>Games</h1>
      {/* Pass the games data to Games component */}
      <Games games={gamesData} />
    </div>
  );
};

export default Read;
