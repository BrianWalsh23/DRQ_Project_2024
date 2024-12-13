import { useEffect, useState } from "react";
import axios from "axios";
import Games from "./Games";

function View() {
  // data stores list of games retrieved from the backend
  // setData is used to update with new game data
  const [data, setData] = useState([]);

  // axios sends get request to my db
  // list of games is set in data
  const Reload = () => {
    console.log("Reloading game data...");
    axios.get('http://localhost:4000/api/games')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error reloading data:", error);
      });
  };

  useEffect(() => {
    Reload();
  }, []);

  const centerStyle = {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundImage: 'url("https://www.pcworld.com/wp-content/uploads/2024/05/steam-game-library.jpg?quality=50&strip=all")',

  };

  return (
    <div style={centerStyle}>
      <h1 style={{ textAlign: 'center', color: '#222', backgroundColor: 'black', color: '#bd0000', fontFamily: 'Nosifer', }}>Game List</h1>
      {/* Pass the game data to the Games component */}
      <Games myGames={data} ReloadData={Reload} />
    </div>
  );
}

export default View;
