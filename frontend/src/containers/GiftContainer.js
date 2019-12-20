import React, { Component } from 'react'
import { connect } from 'react-redux';
// import GiftForm from '../components/GiftForm';
import Gifts from '../components/Gifts';

class GiftContainer extends Component {
    render() {
        return (
            <div>
                {this.props.gifts.map(gift => <Gifts key={gift.id}{...gift} />)}
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
// export default connect(mapStateToProps, mapDispatchToProps)(GiftContainer);

export default connect(mapStateToProps)(GiftContainer);