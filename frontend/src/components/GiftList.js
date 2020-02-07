import React, { Component } from 'react';
import { Card, Button, Rating} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
// import GiftShow from "./GiftShow";
// const GiftList = ({gifts, handleDestroy, handleLike}) => {   
class GiftList extends Component {
    // when mounted, gift list is unsorted. state is set likewise
    constructor(props) {
        super(props);
        this.state = {
            sorted: false
        };
    };
    // toggle state when 'sort by price' button is clicked
    handleClick = () => {
        this.setState(prevState => ({
            sorted: !prevState.sorted
        }));
    };
    // sorts gifts by price 
    sortList = () => { 
            let gifts = this.props.gifts
            return (
                [...gifts].sort((a, b) =>
                    parseInt(b.price) - parseInt(a.price)
                ));
    };      
    render() {
        // will render list according to state
        const renderList = () => {
            let gifts;
            let sorted = this.state.sorted
            if (sorted) {
                gifts = this.sortList()
            }
            else {
                gifts = this.props.gifts
            }
            return gifts.map(gift => 
                <Card color='green'>
                    <Card.Header>
                        <Link key={gift.id} to={`/gifts/${gift.id}`} style={{color: 'green'}}>{gift.name}</Link>
                    </Card.Header>
                    <Card.Content>
                        <Card.Meta>For: {gift.to}</Card.Meta>
                        <Card.Description>Price: ${gift.price}</Card.Description>
                        <Card.Description>Category: {gift.category}</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Button basic size="mini" floated='right' circular color="red" onClick={() => this.props.handleDestroy(gift)}> Delete </Button>
                        <Button basic size="mini" floated='right' circular color="green" onClick={() => this.props.handleLike(gift.id)}>like</Button>
                        <Rating icon='heart' defaultRating={1} maxRating={5} />
                    </Card.Content>
                </Card>
                )
        }

        return (
            <div>
                {/* <button onClick={sortList()}>Sort Gifts</button> */}
                {renderList()}
                <button onClick={this.handleClick}>Sort by Price</button>
            </div>
        );
    };      
};
export default GiftList;

// {this.props.gifts.map(gift => (
//     <GiftCard
//     key={gift.id}
//     {...gift}
//     handleDestroy={this.props.destroyGift}
//     />
// ))}

// renderList = (giftArray) => {        
//     return Object.keys(giftArray).map(giftID =>

//     );}   