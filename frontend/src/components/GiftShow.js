import React from 'react';
import { Card, Image } from 'semantic-ui-react';
const GiftShow = ({ match, gifts, handleDestroy }) => {
    const gift = gifts[match.params.id]
    return (
        <div>
            <div >
                <Card color='red'>                    
                    <Card.Content textAlign="right">
                    <Image src="/defaultPresent.png" size='tiny' wrapped floated='left' />
                        <Card.Header>{gift.name}</Card.Header>
                        <Card.Meta>Category: {gift.category}</Card.Meta>
                        <Card.Description>
                            Price: {gift.price}
                        </Card.Description>
                        <button onClick={() => handleDestroy(gift.id)}>Delete</button>
                    </Card.Content>
                </Card>
            </div>
        </div>
    );
}
export default GiftShow;