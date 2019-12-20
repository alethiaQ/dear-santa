import React, { Component } from 'react'
import { connect } from 'react-redux';
import { ADD_GIFT } from '../actions/gifts';

 class GiftForm extends Component {
    state = {
        item: "",
        price: "",
        // url: '',
        // picture: '',
        // is_for: '',
        // progress: 'incomplete'
    };

    handleOnChange = event => {
        // pulling name and value attributes from JSX elements that will correspond too state
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = event => {
        event.preventDefault();
        // action from prop used as a function that will dispatch this state to our reducers
        this.props.addGift(this.state);
        this.setState({
            item: '',
            price: ''
        });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Item: </label>
                    <input type="text"
                        name="item"
                        value={this.state.item}
                        onChange={this.handleOnChange}
                        className="form-control"
                    />
                    <label>Price: </label>
                    <input type="text"
                        name="price"
                        value={this.state.price}
                        onChange={this.handleOnChange}
                        className="form-control"
                    />
                    <input type="submit" />
                </form>
            </div>
        );
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addGift: gift => dispatch({type: ADD_GIFT, gift})
    };
};
// const mapDispatchToProps = dispatch => (
//     { addGift: gift => dispatch({ type: 'ADD_GIFT', gift }) }
// );
export default connect(null, mapDispatchToProps)(GiftForm);
// ○ Item
// ○ Price
// ○ URL 
// ○ Image 
// ○ Intended for
// Complete 