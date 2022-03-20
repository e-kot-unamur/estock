import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Game from './Game.js';
const Games = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        axios.get('data/games.json').then(res => setData(res.data));
    }, []);
    return (
        <div className="games">
            {data &&    //To wait before the data is fetch
            <div className="games-list">
                {Object.entries(data).map(([key, game]) => (
                    <Game game={game} key={key}/>   //Take game in props
                ))}
            </div>           
            }
        </div>
    );
};

export default Games;
/*
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
*/