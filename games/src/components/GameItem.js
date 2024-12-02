import { useEffect } from "react";
import Card from 'react-bootstrap/Card';

function GameItem(props) {
  useEffect(() => {
    console.log("Game Item:", props.myGame);
  }, [props.myGame]); // Only run this effect when the myGame prop changes

  return (
    <div>
      <Card>
        <Card.Header>{props.myGame.Title}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <img src={props.myGame.Poster} alt={props.myGame.Title} />
            <footer>{props.myGame.Year}</footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
}

export default GameItem;
