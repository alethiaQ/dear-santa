import React from 'react';
import { Card, Image } from 'semantic-ui-react';
const Gifts = ({ name, price, id, handleDestroy }) => (
    <div>
     <Card>
        <Image  />
            <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Description>{price}</Card.Description> 
                <Card.Button onClick={() => handleDestroy(id)}> Done</Card.Button>
            </Card.Content>
     </Card>
    </div>

);

export default Gifts;