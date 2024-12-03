import { useEffect, useState } from "react";
import axios from "axios";
import Games from "./Games";

function View() {
  const [data, setData] = useState([]);

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
    textAlign: 'center', // Centers text horizontally
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Centers items horizontally
    justifyContent: 'center', // Centers items vertically
    minHeight: '100vh', // Ensures full-page centering
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
