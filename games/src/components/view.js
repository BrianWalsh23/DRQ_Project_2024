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

  return (
    <div>
      <h1>Game List</h1>
      {/* Pass the game data to the Games component */}
      <Games myGames={data} ReloadData={Reload} />
    </div>
  );
};

export default View;
