const express = require('express');
const app = express();
const port = 4000;

const cors = require('cors');
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster0.5f9kq.mongodb.net/games');

// Define the game schema
const gameSchema = new mongoose.Schema({
    title: String,
    platform: String,  // e.g., Xbox, PS5, PC
    developer: String,  // e.g., Naughty Dog, Rockstar Games
    score: Number,
    image: String
  });
  
  // Create a model based on the schema
  const GameModel = mongoose.model('games', gameSchema);

// API route for fetching games
app.get('/api/games', async (req, res) => {
    
      const game = await GameModel.find({});  // Fetch all games from the database
      console.log('Fetched games:', game);
      res.json(game)  // Respond with a 200 status code and the games data
    
  });

  app.get('/api/game/:id', async (req, res) => {
      let game = await GameModel.findById({ _id: req.params.id });  // Find a specific game by its ID
        
      res.send(game);  // Respond with the game data
    
   
  });

  app.put('/api/game/:id', async (req, res) => {
    let game = await GameModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(game);
  });

  app.delete('/api/games/:id', async (req, res) => {
  
    console.log('Deleting game with ID:', req.params.id);
    const game = await GameModel.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "Game deleted successfully", game });
    

});
  
app.post('/api/games', async (req, res) => {
    console.log('Received POST request:', req.body);
    const { title, platform, developer, score, image } = req.body;
  
    const newGame = new GameModel({ title, platform, developer, score, image });
    await newGame.save();

    res.status(201).json({ message: 'Game record created successfully', game: newGame });
    })
      
    app.get('/api/game/:id', async (req, res) => {
      const game = await GameModel.findById(req.params.id);
      res.send(game);
    });



// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});






// I used this API for testing purposes

/* // API route for fetching games
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
}); */