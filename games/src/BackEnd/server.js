const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

// Enable CORS for all requests
app.use(cors());

// Basic route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// API route for fetching games
app.get('/api/games', (req, res) => {
    const myGames = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "gameID": "tt4154756",
            "Type": "game",
            "Poster": "https://example.com/poster1.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "gameID": "tt3498820",
            "Type": "game",
            "Poster": "https://example.com/poster2.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "gameID": "tt0816711",
            "Type": "game",
            "Poster": "https://example.com/poster3.jpg"
        }
    ];
    
    // Sending a 201 status code and returning the 'myGames' array as a JSON response
    res.status(201).json({ myGames });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
