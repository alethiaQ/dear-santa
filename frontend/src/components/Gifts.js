import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
const Gifts = ({ item, price, id }) => (
    <div>
     <Card>
        <Image  />
            <Card.Content>
                <Card.Header>{item}</Card.Header>
                <Card.Description>{price}</Card.Description>  
            </Card.Content>
     </Card>
    </div>

);

export default Gifts;