import React, { Component } from 'react'
import { connect } from 'react-redux';
import GiftCard from '../components/GiftCard';
import { fetchGifts, destroyGift } from "../actions/gifts";

class GiftContainer extends Component {
    // componentDidMount() {
    //     this.props.fetchGifts();
    // }
    componentDidMount() {
        this.props.fetchGifts();
    }

    render() {
       
        return (
            <div>
                {/* Link to gift list possibly */}
                {this.props.gifts.map(gift => (
                    <GiftCard
                    key={gift.id}
                    {...gift}
                    handleDestroy={this.props.destroyGift}
                    />
                ))}
                
            </div>
        )
    };
};
// const mapDispatchToProps = dispatch => (
//     { addGift: gift => dispatch({ type: 'ADD_GIFT', gift }) }
// );
function mapStateToProps({ gifts }) {
    return { gifts };
}

export default connect(mapStateToProps, {fetchGifts, destroyGift})(GiftContainer);