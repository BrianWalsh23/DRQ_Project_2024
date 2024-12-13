import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Add() {
  // useState hook manages the values entered
  const [title, setTitle] = useState('');
  const [platform, setPlatform] = useState('');
  const [developer, setDeveloper] = useState('');
  const [score, setScore] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleScoreChange = (e) => {
    const value = e.target.value;
    // Allow only numeric input and values between 1 and 100
    if (!isNaN(value) && value >= 1 && value <= 100) {
      setScore(value);
      setError('');
    } else {
      setError('Score must be a number between 1 and 100.');
    }
  };

  // handleSubmit is used to handle form submissions
  const handleSubmit = (e) => {
    e.preventDefault();

    // Final validation before submission
    if (!platform) {
      setError('Please select a valid platform.');
      return;
    }

    // Final validation before submission
    if (score < 1 || score > 100) {
      setError('Score must be between 1 and 100.');
      return;
    }

    console.log(`Title: ${title}, Platform: ${platform}, Developer: ${developer}, Score: ${score}, Image(URL): ${image}`);

    const game = {
      title,
      platform,
      developer,
      score,
      image
    };

    // Axios sends the data to the backend to be saved
    // /games is my mongodb
    axios.post('http://localhost:4000/api/games', game)
      .then((res) => {
        console.log(res.data);
        navigate('/'); 
      })
      .catch((err) => console.log(err.data));
  };
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh", 
    textAlign: "center", 
    fontFamily: "Arial, sans-serif", 
    backgroundImage: 'url("https://www.pcworld.com/wp-content/uploads/2024/05/steam-game-library.jpg?quality=50&strip=all")',
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: 'center', color: '#222', backgroundColor: 'black', color: '#bd0000', fontFamily: 'Nosifer', }}>Please add a new game here!</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label style={{ textAlign: 'center', color: '#222', backgroundColor: 'black', color: '#bd0000', fontFamily: 'Nosifer', }}>Add Game Title: </label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {/* https://www.geeksforgeeks.org/how-to-get-selected-value-in-dropdown-list-using-javascript/ */}
          <label style={{ textAlign: 'center', color: '#222', backgroundColor: 'black', color: '#bd0000', fontFamily: 'Nosifer', }}>What Platform:(Xbox, PS5, PC): </label>
          <select
            className="form-control"
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
          >
            <option value="" style={{ textAlign: 'center', color: '#222', backgroundColor: 'black', color: '#bd0000', fontFamily: 'Nosifer', }}>Select Platform</option>
            <option value="Xbox" style={{ textAlign: 'center', color: '#222', backgroundColor: 'black', color: '#bd0000', fontFamily: 'Nosifer', }}>Xbox</option>
            <option value="PS5" style={{ textAlign: 'center', color: '#222', backgroundColor: 'black', color: '#bd0000', fontFamily: 'Nosifer', }}>PS5</option>
            <option value="PC" style={{ textAlign: 'center', color: '#222', backgroundColor: 'black', color: '#bd0000', fontFamily: 'Nosifer', }}>PC</option>
          </select>
          <label style={{ textAlign: 'center', color: '#222', backgroundColor: 'black', color: '#bd0000', fontFamily: 'Nosifer', }}>Game Developer: </label>
          <input
            type="text"
            className="form-control"
            value={developer}
            onChange={(e) => setDeveloper(e.target.value)}
          />
          <label style={{ textAlign: 'center', color: '#222', backgroundColor: 'black', color: '#bd0000', fontFamily: 'Nosifer', }}>Review Score(1-100): </label>
          <input
            type="number"
            className="form-control"
            value={score}
            onChange={handleScoreChange}
          />
          <label style={{ textAlign: 'center', color: '#222', backgroundColor: 'black', color: '#bd0000', fontFamily: 'Nosifer', }}>Game Image: </label>
          <input type="text"
            className="form-control"
            value={image}
            onChange={(e) => { setImage(e.target.value) }}
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
        <input type="submit" value="Add Game" style={{
          backgroundColor: 'black', 
          color: '#bd0000', 
          padding: '10px 20px', 
          border: 'none', 
          borderRadius: '5px', 
          cursor: 'pointer', 
          fontSize: '16px', 
          fontFamily: 'Nosifer'
        }} />
      </form>
    </div>
  );
}

export default Add;
