import { useState } from "react";
import axios from 'axios';


function Add() {
  const [title, setTitle] = useState('');
  const [platform, setPlatform] = useState('');
  const [developer, setDeveloper] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(`Title: ${title}, Platform: ${platform}, Developer: ${developer}`);
   
    const game = {
      title,
      platform,
      developer,
    };

    console.log(game);
    
    axios.post('http://localhost:4000/api/games', game)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.data));
  }

  return (
    <div>
      <h2>This is my Add Component for Games.</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Add Game Title: </label>
          <input type="text"
            className="form-control"
            value={title}
            onChange={(e) => { setTitle(e.target.value) }}
          />
          <label>What Platform?(Xbox, PS5, PC): </label>
          <input type="text"
            className="form-control"
            value={platform}
            onChange={(e) => { setPlatform(e.target.value) }}
          />
          <label>Game Developer: </label>
          <input type="text"
            className="form-control"
            value={developer}
            onChange={(e) => { setDeveloper(e.target.value) }}
          />
        </div>
        <input type="submit" value="Add Game" />
      </form>
    </div>
  );
}

export default Add;
