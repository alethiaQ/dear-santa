import React from 'react';

const GiftShow = ({match, gifts}) => {
    return (
        <div>
            <h3>{gifts[match.params.id].title }</h3>
        </div>
    );
}
export default GiftShow;