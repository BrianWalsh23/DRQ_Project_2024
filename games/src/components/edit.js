import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Edit(props) {
  let { id } = useParams();
  const [title, setTitle] = useState("");
  const [platform, setPlatform] = useState("");
  const [developer, setDeveloper] = useState("");
  const [score, setScore] = useState("");
  const navigate = useNavigate();

useEffect(() => {
    axios.get('http://localhost:4000/api/game/' + id)
        .then((response) => {
            setTitle(response.data.title);
            setPlatform(response.data.platform);
            setDeveloper(response.data.developer);
            setScore(response.data.score);
        })
        .catch((error) => {
            console.log(error);
        });
}, [id]);

const handleSubmit = (event) => {
    event.preventDefault();
    const newGame = { id, title, platform, developer };
    axios.put('http://localhost:4000/api/game/' + id, newGame)
        .then((res) => {
            console.log(res.data);
            navigate('/view');
        });
}

return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Title of game: </label>
                <input type="text" 
                className="form-control" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Platform: </label>
                <input type="text" 
                className="form-control" 
                value={platform} 
                onChange={(e) => setPlatform(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Developer: </label>
                <input type="text" 
                className="form-control" 
                value={developer} 
                onChange={(e) => setDeveloper(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Review Score(1-100): </label>
                <input type="text" 
                className="form-control" 
                value={score} 
                onChange={(e) => setScore(e.target.value)} />
            </div>
            <div className="form-group">
                <input type="submit" value="Edit Game" className="btn btn-primary" />
            </div>
        </form>
    </div>
);
}