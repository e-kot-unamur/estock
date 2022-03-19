import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Game from './Game.js';
import Client from './Client.js';
import Rent from './Rent.js';
const Games = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        axios.get('data/data.json').then(res => setData(res.data));
    }, []);
    console.log(data);
    return (
        <div className="tochange">
        <div className="games">
            {data &&    //To wait before the data is fetch
            <div className="games-list">
                {data.games.map((game) => (
                    <Game game={game} key={game.id}/>   //Take game in props
                ))}
            </div>           
            }
        </div>
            {data &&
            <ul className="client-list">
                {data.clients.map((client) => (
                    <Client client={client} key={client.id}/>
                ))}
            </ul>           
            }
            {data &&
            <ul className="rent-list">
                {data.rents.map((rent) => (
                    <Rent rent={rent} key={rent.id}/>
                ))}
            </ul>           
            }
        </div>
    );
};

export default Games;