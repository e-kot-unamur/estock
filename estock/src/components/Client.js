import React from 'react';

const Client = (props) => {
    const { client } = props;
    return (
        <div className="client">
            <li className="client-list">
                <div className="data-container">
                    <ul>
                        <li>Nom : {client.name}</li>
                        <li>Prénom : {client.first_name}</li>
                        <li>Caution prise: {client.deposit}€</li>
                    </ul>
                </div>
            </li>
        </div>
    );
};

export default Client;