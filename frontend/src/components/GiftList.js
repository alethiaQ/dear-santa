import React from 'react';
import { Card, Button, Rating} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
// import GiftShow from "./GiftShow";
const GiftList = ({gifts, handleDestroy, handleLike}) => {
 
        const renderList = Object.keys(gifts).map(giftID =>
            <Card color='green'>
                <Card.Header>
                    <Link key={giftID} to={`/gifts/${giftID}`} style={{color: 'green'}}>{gifts[giftID].name}</Link>
                </Card.Header>
                <Card.Content>
                    <Card.Meta>For: {gifts[giftID].to}</Card.Meta>
                    <Card.Description>Price: ${gifts[giftID].price}</Card.Description>
                    <Card.Description>Category: {gifts[giftID].category}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Button basic size="mini" floated='right' circular color="red" onClick={() => handleDestroy(gifts[giftID])}>Delete</Button>
                    <Button basic size="mini" floated='right' circular color="green" onClick={() => handleLike(gifts[giftID].id)}>like</Button>
                    <Rating icon='heart' defaultRating={1} maxRating={5} />
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