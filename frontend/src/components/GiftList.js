import React from 'react';
import { Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
// import GiftShow from "./GiftShow";
const GiftList = ({gifts}) => {
    const renderList = Object.keys(gifts).map(giftID =>
        <Card>
            <Card.Header>
                <Link key={giftID} to={`/gifts/${giftID}`} style={{color: 'green'}}>{gifts[giftID].name}</Link>
            </Card.Header>
            <Card.Content>
                <Card.Description>Price: ${gifts[giftID].price}</Card.Description>
                <Card.Description>Category: {gifts[giftID].category}</Card.Description>
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