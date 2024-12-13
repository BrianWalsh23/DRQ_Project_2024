import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Content = () => {
    // games will store my list and setGames with update games
    const [games, setGames] = useState([]);

    // Axios sends request to my db /games
    useEffect(() => {
        axios.get('http://localhost:4000/api/games')
            .then((response) => {
                setGames(response.data);
            })
            .catch((error) => {
                console.error("Error fetching games:", error);
            });
    }, []);

    // Filter through my games array to find the correct platforms
    /* https://www.w3schools.com/jsref/jsref_filter.asp */
    const xboxGames = games.filter((game) => game.platform === 'Xbox');
    const ps5Games = games.filter((game) => game.platform === 'PS5');
    const pcGames = games.filter((game) => game.platform === 'PC');

    // Get the game with the highest score
    // Check that games array is not empty first
    const highestRatedGame = games.length > 0 ?
        games.reduce((maxGame, game) =>
            (game.score > maxGame.score ? game : maxGame), games[0]) : null;

    const gameCardStyle = {
        border: '1px solid #ccc',
        padding: '15px',
        width: '300px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        backgroundColor: '#fff',
    };

    const sectionStyle = {
        marginBottom: '40px',
    };

    const flexContainerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'center',
    };

    const imgStyle = {
        width: '100%',
        height: 'auto',
        marginBottom: '15px',
        borderRadius: '5px',
    };


    // Adding background image style
    const containerStyle = {
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        backgroundImage: 'url("https://www.pcworld.com/wp-content/uploads/2024/05/steam-game-library.jpg?quality=50&strip=all")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
    };

    const sectionTitleStyle = {
        fontFamily: 'Nosifer',
        fontSize: '1.5em',
        marginBottom: '20px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#fff',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Adding text shadow for better readability
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '10px',
        borderRadius: '5px',

    };

    return (
        <div style={containerStyle}>
            <h1 style={{ textAlign: 'center', color: '#222', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: '#fff', fontFamily: 'Nosifer', }}>Game Library</h1>

            <section style={sectionStyle}>
                <h2 style={sectionTitleStyle}>Xbox Games</h2>
                <div style={flexContainerStyle}>
                    {/* Map function loops through xboxGames array */}
                    {xboxGames.map((game) => (
                        <div key={game._id} style={gameCardStyle}>
                            <h3 style={{ fontFamily: 'Rubik Dirt, cursive', }}>{game.title}</h3>
                            <img src={game.image} alt={`${game.title} cover`} style={imgStyle} />
                            <p style={{ backgroundColor: '#d3f8e2', fontFamily: 'Rubik Dirt' }}>Platform: {game.platform}</p>
                            <div style={{ borderBottom: '1px solid #ccc', margin: '10px 0' }}></div> {/* Divider */}
                            <p style={{ backgroundColor: '#f7e6ff', fontFamily: 'Rubik Dirt' }}>Developer: {game.developer}</p>
                            <div style={{ borderBottom: '1px solid #ccc', margin: '10px 0' }}></div> {/* Divider */}
                            <p style={{ backgroundColor: '#ffebcc', fontFamily: 'Rubik Dirt' }}>Review Score: {game.score}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section style={sectionStyle}>
                <h2 style={sectionTitleStyle}>PS5 Games</h2>
                <div style={flexContainerStyle}>
                    {ps5Games.map((game) => (
                        <div key={game._id} style={gameCardStyle}>
                            <h3 style={{ fontFamily: 'Rubik Dirt, cursive', }}>{game.title}</h3>
                            <img src={game.image} alt={`${game.title} cover`} style={imgStyle} />
                            <p style={{ backgroundColor: '#d3f8e2', fontFamily: 'Rubik Dirt' }}>Platform: {game.platform}</p>
                            <div style={{ borderBottom: '1px solid #ccc', margin: '10px 0' }}></div> {/* Divider */}
                            <p style={{ backgroundColor: '#f7e6ff', fontFamily: 'Rubik Dirt' }}>Developer: {game.developer}</p>
                            <div style={{ borderBottom: '1px solid #ccc', margin: '10px 0' }}></div> {/* Divider */}
                            <p style={{ backgroundColor: '#ffebcc', fontFamily: 'Rubik Dirt' }}>Review Score: {game.score}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section style={sectionStyle}>
                <h2 style={sectionTitleStyle}>PC Games</h2>
                <div style={flexContainerStyle}>
                    {pcGames.map((game) => (
                        <div key={game._id} style={gameCardStyle}>
                            <h3 style={{ fontFamily: 'Rubik Dirt, cursive', }}>{game.title}</h3>
                            <img src={game.image} alt={`${game.title} cover`} style={imgStyle} />
                            <p style={{ backgroundColor: '#d3f8e2', fontFamily: 'Rubik Dirt' }}>Platform: {game.platform}</p>
                            <div style={{ borderBottom: '1px solid #ccc', margin: '10px 0' }}></div> {/* Divider */}
                            <p style={{ backgroundColor: '#f7e6ff', fontFamily: 'Rubik Dirt' }}>Developer: {game.developer}</p>
                            <div style={{ borderBottom: '1px solid #ccc', margin: '10px 0' }}></div> {/* Divider */}
                            <p style={{ backgroundColor: '#ffebcc', fontFamily: 'Rubik Dirt' }}>Review Score: {game.score}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section style={sectionStyle}>
                <h2 style={sectionTitleStyle}>Highest Rated Game</h2>
                {highestRatedGame ? (
                    <div style={gameCardStyle}>
                        <h3 style={{ fontFamily: 'Rubik Dirt, cursive', }}>{highestRatedGame.title}</h3>
                        <img
                            src={highestRatedGame.image}
                            alt={`${highestRatedGame.title} cover`}
                            style={imgStyle}
                        />
                        <p style={{ backgroundColor: '#d3f8e2', fontFamily: 'Rubik Dirt' }}>Platform: {highestRatedGame.platform}</p>
                        <div style={{ borderBottom: '1px solid #ccc', margin: '10px 0' }}></div> {/* Divider */}
                        <p style={{ backgroundColor: '#f7e6ff', fontFamily: 'Rubik Dirt' }}>Developer: {highestRatedGame.developer}</p>
                        <div style={{ borderBottom: '1px solid #ccc', margin: '10px 0' }}></div> {/* Divider */}
                        <p style={{ backgroundColor: '#ffebcc', fontFamily: 'Rubik Dirt' }}>Review Score: {highestRatedGame.score}</p>
                    </div>
                ) : (
                    <p>No games available to display.</p>
                )}
            </section>
        </div>
    );
};

export default Content;
