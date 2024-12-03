import { useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from "axios";

    // Handles deletion. Need to add our local host
    // Reload refreshes movie list
    // props.myMovie._id is our ID

    function GameItem(props) {
        const handleDelete = (e) => {
            e.preventDefault();
            axios.delete('http://localhost:4000/api/games/' + props.myGame._id)
                .then(() => {
                    props.Reload(); // Refresh the movie list after deletion
                })
                .catch((error) => {
                    console.error("Error deleting game:", error);
                });
        };

    return(
        <div>
            <Card>
                <Card.Header>{props.myGame.title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                      <p>Platform: {props.myGame.platform}</p>
                      <p>Developer: {props.myGame.developer}</p>
                      <p>Score: {props.myGame.score}</p>
                    </blockquote>
                </Card.Body>
                
                <Link to={"/edit/" + props.myGame._id} className="btn btn-primary">Edit</Link>
                <Button variant="btn btn-danger" onClick={handleDelete}>Delete</Button>
            </Card>
        </div>
        );
}

export default GameItem;