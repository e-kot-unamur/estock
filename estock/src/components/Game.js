import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button} from 'react-bootstrap'
const Game = (props) => {
    const { game } = props;  // Equivalent to const game = props.game;
    return (
            <Card className='box'>
                <Card.Header>{game.name}</Card.Header>
                <Card.Img src={game.picture} alt="Jeu"/>
                <Card.Body>
                    <Card.Text>
                        {game.description}<br/>
                        Date d'obtention: {game.created_at}
                    </Card.Text>
                    <Button className="gameBut">Modifier</Button>
                </Card.Body>
            </Card>
    );
};

export default Game;