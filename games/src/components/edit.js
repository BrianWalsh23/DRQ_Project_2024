import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Edit(props) {
  // useState hook manages the values entered
  let { id } = useParams();
  const [title, setTitle] = useState("");
  const [platform, setPlatform] = useState("");
  const [developer, setDeveloper] = useState("");
  const [score, setScore] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // axios sends the get request to my db and finds it by ID
  // .then fills all set fields to be updated later
  useEffect(() => {
    axios.get('http://localhost:4000/api/game/' + id)
      .then((response) => {
        setTitle(response.data.title);
        setPlatform(response.data.platform);
        setDeveloper(response.data.developer);
        setScore(response.data.score);
        setImage(response.data.image);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

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

  const handleSubmit = (event) => {
    event.preventDefault();

    // Final validation before submission
    if (score < 0 || score > 100) {
      setError('Score must be between 1 and 100.');
      return;
    }

    // axios.put sends the new updated data to my db
    const updatedGame = { id, title, platform, developer, score };
    axios.put('http://localhost:4000/api/game/' + id, updatedGame)
      .then((res) => {
        console.log(res.data);
        navigate('/view');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title of game: </label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Platform: </label>
          <input
            type="text"
            className="form-control"
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Developer: </label>
          <input
            type="text"
            className="form-control"
            value={developer}
            onChange={(e) => setDeveloper(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Review Score (0-100): </label>
          <input
            type="number"
            className="form-control"
            value={score}
            onChange={handleScoreChange}
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
        <div className="form-group">
          <label>Image(URL): </label>
          <input type="text"
            className="form-control"
            value={image}
            onChange={(e) => setImage(e.target.value)} />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Edit Game"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
