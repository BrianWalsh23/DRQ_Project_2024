import { useState } from "react";

function Create() {
  const [title, setTitle] = useState('');
  const [platform, setPlatform] = useState('');
  const [developer, setDeveloper] = useState('');
  const [genre, setGenre] = useState('');
  const [score, setScore] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);  // Now logging the game title
  }

  return (
    <div>
      <h2>This is my Create Component for Games.</h2>
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
          <label>Genre(Sport, RPG, FPS): </label>
          <input type="text"
            className="form-control"
            value={genre}
            onChange={(e) => { setGenre(e.target.value) }}
          />
          <label>Add Game Review out of 10: </label>
          <input type="text"
            className="form-control"
            value={score}
            onChange={(e) => { setScore(e.target.value) }}
          />
        </div>
        <input type="submit" value="Add Game" />
      </form>
    </div>
  );
}

export default Create;
