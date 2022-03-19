import React from 'react';

const Rent = (props) => {
    const {rent} = props;
    return (
        <div className="rent">
            <li>client: {rent.client}</li>
        </div>
    );
};

export default Rent;