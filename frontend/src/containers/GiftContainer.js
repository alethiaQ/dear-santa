import React, { Component } from 'react'
import { connect } from 'react-redux';
import Gifts from '../components/Gifts';
import { fetchGifts, destroyGift } from "../actions/gifts";

class GiftContainer extends Component {
    componentDidMount() {
        this.props.fetchGifts();
    }
    render() {
        return (
            <div>
                {this.props.gifts.map(gift => <Gifts
                    key={gift.id}
                    {...gift}
                    handleDestroy={this.props.destroyGift}
                />)}
            </div>
        )
    };
};
// const mapDispatchToProps = dispatch => (
//     { addGift: gift => dispatch({ type: 'ADD_GIFT', gift }) }
// );
const mapStateToProps = state => {
    return {
        gifts: state.gifts
    };
};

export default connect(mapStateToProps, {destroyGift, fetchGifts})(GiftContainer);