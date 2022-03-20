import React, { useState, useEffect}from 'react';
import Navigation from "../components/Navigation";
import Rent from "../components/Rent";
import axios from 'axios';
const RentPage = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        axios.get('data/rent.json').then(res => setData(res.data));
    }, []);
    return (
        <div className="rent">
            <Navigation/>
            Location des jeux
            {data &&    //To wait before the data is fetch
            <div className="rent-list">
                {Object.entries(data).map(([key, rent]) => (
                    <Rent rent={rent} key={key}/>   //Take rent in props
                ))}
            </div>           
            }
        </div>
    );
};

export default RentPage;