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

    return (
        <div>
            <h1>Game Library</h1>
            <div>
                {games.map((game) => (
                    <div key={game._id}>
                        <h3>{game.title}</h3>
                        <p>Platform: {game.platform}</p>
                        <p>Developer: {game.developer}</p>
                        <p>Review SCore: {game.score}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Content;
