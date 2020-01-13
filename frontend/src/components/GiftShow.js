import React from 'react';
import { Card } from 'semantic-ui-react';
const GiftShow = ({ match, gifts }) => {
    const gift = gifts[match.params.id]
    return (
        <div>
            <div className="ui container center">
            <Card.Content>
            <h3>{gift.name}</h3>
                <p>Category: {gift.category} </p>
             
                </Card.Content>
            </div>
        </div>
    );
}
export default GiftShow;