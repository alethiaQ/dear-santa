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
        console.log(event.target);
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state)
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