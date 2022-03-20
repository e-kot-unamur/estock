import React from 'react';
import {Card} from 'react-bootstrap'

const Rent = (props) => {
    const {rent} = props;
    return (
        <div className="rent">
            <Card className='box'>
                <Card.Body>
                    <Card.Text>
                        Client: {rent.client}<br/>
                        Jeu: {rent.game}<br/>
                        Date de location: {rent.start}<br/>
                        Date max de retour: {rent.end}<br/>
                        Durée max de location: {rent.deadline}<br/>
                        Type de location: {rent.type}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Rent;