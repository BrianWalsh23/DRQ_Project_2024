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

    // Filter games by platform
    const xboxGames = games.filter((game) => game.platform === 'Xbox');
    const ps5Games = games.filter((game) => game.platform === 'PS5');
    const pcGames = games.filter((game) => game.platform === 'PC');

    return (
        <div>
            <h1>Game Library</h1>

            <h2>Xbox Games</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
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
        </div>
    );
};

export default Content;
