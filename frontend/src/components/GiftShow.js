import React from 'react';

const GiftShow = ({gift}) => {
    return (
        <div className="ui centered card item">
            <h3 className="ui header">{ gift.name }</h3>
        </div>
    );
}
export default GiftShow;