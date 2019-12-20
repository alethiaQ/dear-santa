import React from 'react';

const Gifts = ({ item, price, id }) => (
    <div>
        <div className="gift-card-block">
            <p>{item}- {price}</p>
        </div>
    </div>

);

export default Gifts;