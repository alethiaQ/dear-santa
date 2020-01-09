import React from 'react';
import { Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const GiftList = ({ gifts }) => {
    const renderList = gifts.map(gift =>
       <Card>
        <Card.Content>
            <Card.Header>
                <Link key={gift.id} to={`/gifts/${gift.id}`}>{gift.name}</Link>
            </Card.Header>
            <Card.Description>{gift.price}</Card.Description>
            <Card.Description>Category: {gift.category}</Card.Description>
        </Card.Content>
        </Card>
    );
    return (
        <div>
            <Card.Group>
               {renderList}
            </Card.Group>
        </div>
    )
};

export default GiftList;

// {this.props.gifts.map(gift => (
//     <GiftCard
//     key={gift.id}
//     {...gift}
//     handleDestroy={this.props.destroyGift}
//     />
// ))}