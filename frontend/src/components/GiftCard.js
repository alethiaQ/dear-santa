import React from 'react';
import { Card } from 'semantic-ui-react';
const GiftCard = ({ name, price, id, handleDestroy }) => (
    <div>
        
     <Card>
            <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Description>{price}</Card.Description> 
                {/* <Card.Button> Done </Card.Button> */}
            </Card.Content>
     </Card>
    </div>

);

export default GiftCard;