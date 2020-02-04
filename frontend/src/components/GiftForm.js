import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createGift } from "../actions/gifts";
import { Form, Message} from 'semantic-ui-react'

 class GiftForm extends Component {
    state = {
        name: "",
        price: "",
        url: "",
        category: "",
        to: ""
        
    };
    
    handleOnChange = event => {
        // pulling name and value attributes from JSX elements that will correspond too state
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = event => {
        event.preventDefault();
        // action from prop used as a function that will dispatch this state to our reducers
        this.props.createGift({ ...this.state });
        this.setState({
            name: "",
            price: "",
            url: "",
            category: "",
            to: ""
        });
    }
    render() {
        return (
            <div>
                <Message positive>
                    <Message.Header>Important!</Message.Header>
                    <p>- Do not input a '$' into the price field. Acceptable price input: 50.00</p>
                    <p>- Category represents the group intended to buy/receive the item.</p>
                </Message>
                 <Form size='tiny' onSubmit={this.handleSubmit}>
                    <Form.Group widths='equal'>
                        <Form.Input fluid 
                            label="Name"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleOnChange}
                            className="form-control" 
                        />
                          <Form.Input fluid 
                            label="Gift For:"
                            name="to"
                            value={this.state.to}
                            onChange={this.handleOnChange}
                            className="form-control" 
                        />
                        <Form.Input fluid
                        label="Price"
                         type="text"
                        name="price"
                        value={this.state.price}
                        onChange={this.handleOnChange}
                        className="form-control"
                        />
                        <Form.Input fluid
                        label="Item URL"
                         type="text"
                        name="url"
                        value={this.state.url}
                        onChange={this.handleOnChange}
                        className="form-control"
                        />
                    </Form.Group>
                    <Form.Group inline>
                        <label>Category:</label>
                        <select value={this.state.category} onChange={this.handleOnChange} name="category">
                            <option value="parents">Parents</option>
                            <option value="friends">Friends</option>
                            <option value="family">Family</option>
                            <option value="kids">Kids</option>
                            <option value="other">Other</option>

                        </select>              
                    </Form.Group>
                  
                    <input type="submit" />
                </Form>
            </div>
        );
    }
};

// const mapDispatchToProps = dispatch => (
//     { addGift: gift => dispatch({ type: 'ADD_GIFT', gift }) }
// );
export default connect(null, {createGift})(GiftForm);
