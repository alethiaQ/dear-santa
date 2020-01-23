import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
// import GiftShow from "./GiftShow";
const GiftList = ({gifts, handleDestroy, handleLike}) => {
 
        const renderList = Object.keys(gifts).map(giftID =>
            <Card color='green'>
                <Card.Header>
                    <Link key={giftID} to={`/gifts/${giftID}`} style={{color: 'green'}}>{gifts[giftID].name}</Link>
                </Card.Header>
                <Card.Content>
                    <Card.Description>Price: ${gifts[giftID].price}</Card.Description>
                    <Card.Description>Category: {gifts[giftID].category}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Button basic size="mini" floated='right' circular color="red" onClick={() => handleDestroy(gifts[giftID].id)}>Delete</Button>
                    <Button basic size="mini" floated='right' circular color="green" onClick={() => handleLike(gifts[giftID].id)}>like</Button>
                </Card.Content>
             </Card>
         );
        return (
            <div>
                {renderList}
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