import React from 'react';
import { Card, Image } from 'semantic-ui-react';
const GiftShow = ({ match, gifts }) => {
    const gift = gifts.find(g => g.id === match.params.id)
    
    return (
        <div>
            <div >
                <Card color='red'>                    
                    <Card.Content textAlign="right">
                    <Image src="/defaultPresent.png" size='tiny' wrapped floated='left' />
                        <Card.Header>{gift.title}</Card.Header>
                        <Card.Meta>Category: {gift.category}</Card.Meta>
                        <Card.Description>
                            <p>${gift.description}</p>
                        </Card.Description>
                        
                    </Card.Content>
                </Card>
            </div>
        </div>
    );
}
export default GiftShow;