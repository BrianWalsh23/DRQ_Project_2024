import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Content = () => {
    const [games, setGames] = useState([]);

    // Fetch games from the API
    useEffect(() => {
        axios.get('http://localhost:4000/api/games')
            .then((response) => {
                setGames(response.data); // Assuming the API returns an array of games
            })
            .catch((error) => {
                console.error("Error fetching games:", error);
            });
    }, []); // Empty dependency array to run once when the component mounts

    // Filter through my games array to find the correct platforms
    /* https://www.w3schools.com/jsref/jsref_filter.asp */
    const xboxGames = games.filter((game) => game.platform === 'Xbox');
    const ps5Games = games.filter((game) => game.platform === 'PS5');
    const pcGames = games.filter((game) => game.platform === 'PC');

    // Get the game with the highest score
    // I need games.length > 0 with  : null at the end to only find the highest rated game if the array is not empty
    const highestRatedGame = games.length > 0 ?
        games.reduce((maxGame, game) =>
            (game.score > maxGame.score ? game : maxGame), games[0]) : null;

    return (
        <div>
            <h1>Game Library</h1>

            {/* flexwrap allows games to go to the next aisle should the line become full */}
            {/* https://www.w3schools.com/jsreF/prop_style_flexwrap.asp */}
            <h2>Xbox Games</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {/* xboxGames is my array. Map iterates over the array, calls back each element in the array then creates a new array */}
                {/* Call this map function and the xboxGames will appear */}
                {xboxGames.map((game) => (
                    <div key={game._id} style={{ border: '1px solid #ccc', padding: '10px', width: '300px' }}>
                        <h3>{game.title}</h3>
                        <img
                            src={game.image}
                            alt={`${game.title} cover`}
                            style={{ width: '100%', height: 'auto', marginBottom: '10px' }}
                        />
                        <p>Platform: {game.platform}</p>
                        <p>Developer: {game.developer}</p>
                        <p>Review Score: {game.score}</p>
                    </div>
                ))}
            </div>

            <h2>PS5 Games</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {ps5Games.map((game) => (
                    <div key={game._id} style={{ border: '1px solid #ccc', padding: '10px', width: '300px' }}>
                        <h3>{game.title}</h3>
                        <img
                            src={game.image}
                            alt={`${game.title} cover`}
                            style={{ width: '100%', height: 'auto', marginBottom: '10px' }}
                        />
                        <p>Platform: {game.platform}</p>
                        <p>Developer: {game.developer}</p>
                        <p>Review Score: {game.score}</p>
                    </div>
                ))}
            </div>

            <h2>PC Games</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {pcGames.map((game) => (
                    <div key={game._id} style={{ border: '1px solid #ccc', padding: '10px', width: '300px' }}>
                        <h3>{game.title}</h3>
                        <img
                            src={game.image}
                            alt={`${game.title} cover`}
                            style={{ width: '100%', height: 'auto', marginBottom: '10px' }}
                        />
                        <p>Platform: {game.platform}</p>
                        <p>Developer: {game.developer}</p>
                        <p>Review Score: {game.score}</p>
                    </div>
                ))}
            </div>

            {/* https://react.dev/learn/conditional-rendering */}
            <h2>Highest Rated Game</h2>
            {highestRatedGame ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', gap: '20px' }}>
                    <div style={{ border: '1px solid #ccc', padding: '10px', width: '300px' }}>
                        <h3>{highestRatedGame.title}</h3>
                        <img
                            src={highestRatedGame.image}
                            alt={`${highestRatedGame.title} cover`}
                            style={{ width: '100%', height: 'auto', marginBottom: '10px' }}
                        />
                        <p>Platform: {highestRatedGame.platform}</p>
                        <p>Developer: {highestRatedGame.developer}</p>
                        <p>Review Score: {highestRatedGame.score}</p>
                    </div>
                </div>
            ) : (
                <p>No games available to display.</p>
            )}

        </div>
    );
};

export default Content;
