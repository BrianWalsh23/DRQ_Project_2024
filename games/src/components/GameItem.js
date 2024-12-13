import { useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from "axios";


function GameItem(props) {
    const handleDelete = (e) => {
        e.preventDefault();

        // axios.delete sends the delete request to my db and will delete by ID. props.myGame._id
        axios.delete('http://localhost:4000/api/games/' + props.myGame._id)
            .then(() => {
                // refreshes game list after deletion
                props.Reload(); 
            })
            .catch((error) => {
                console.error("Error deleting game:", error);
            });
    };

    return (
        <div>
            <Card>
                <Card.Header>{props.myGame.title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={props.myGame.image}></img>
                        <p>Platform: {props.myGame.platform}</p>
                        <p>Developer: {props.myGame.developer}</p>
                        <p>Score(1-100): {props.myGame.score}</p>
                    </blockquote>
                </Card.Body>

                <Link to={"/edit/" + props.myGame._id} className="btn btn-primary">Edit</Link>
                <Button variant="btn btn-danger" onClick={handleDelete}>Delete</Button>
            </Card>
        </div>
    );
}

export default GameItem;