import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createGift } from "../actions/gifts";
import { Form, Message} from 'semantic-ui-react'

 class GiftForm extends Component {
    state = {
        // name: "",
        // price: "",
        // url: "",
        // category: "",
        // to: ""
        title: "",
        description: "",
        due: "",
        priority: "",
        amount: "",
        category: "",


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
            title: "",
            description: "",
            due: "",
            priority: "",
            amount: "",
            category: "",
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
                            label="Title"
                            name="title"
                            value={this.state.title}
                            onChange={this.handleOnChange}
                            className="form-control" 
                        />
                          <Form.Input fluid 
                            label="Description"
                            name="description"
                            value={this.state.description}
                            onChange={this.handleOnChange}
                            className="form-control" 
                        />
                        <Form.Input fluid
                        label="Amount"
                        // type="text"
                        name="amount"
                        value={this.state.amount}
                        onChange={this.handleOnChange}
                        className="form-control"
                        />
                        <Form.Input fluid
                        label="Due"
                         type="text"
                        name="due"
                        value={this.state.due}
                        onChange={this.handleOnChange}
                        className="form-control"
                        />
                    </Form.Group>
                    <Form.Group inline>
                        <label>Category:</label>
                        <select value={this.state.category} onChange={this.handleOnChange} name="category">
                            <option value="bills">Bills</option>
                            <option value="food">Food/Groceries</option>
                            <option value="clothes">Clothes/Shopping</option>
                            <option value="gas">Gas</option>
                            <option value="cats">Cats</option>

                        </select>              
                    </Form.Group>
                    <Form.Group inline>
                        <label>Priority:</label>
                        <select value={this.state.priority} onChange={this.handleOnChange} name="priority">
                            <option value="important">Important</option>
                            <option value="neutral">Neutral</option>
                            <option value="low">Low</option>
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
