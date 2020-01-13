import React from 'react';
import { Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
// import GiftShow from "./GiftShow";
const GiftList = ({gifts}) => {
    const renderList = gifts.map(gift =>
        <Card>
            
            <Card.Header><Link key={gift.id} to={`/gifts/${gift.id}`}>{gift.name}</Link></Card.Header>
            <Card.Content>
                <Card.Description>{gift.price}</Card.Description>
                <Card.Description>Category: {gift.category}</Card.Description>
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