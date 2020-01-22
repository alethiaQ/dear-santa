import React, { Component } from 'react'; 
import { Form, Pop, Popup } from 'semantic-ui-react'
import { createFund } from '../actions/funds'; 
import { connect } from 'react-redux';
// import FundsCard from './FundsCard';


 class FundsForm extends Component {
    state = {
        amount: ""
    }
    handleOnChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.createFund({ ...this.state });
        this.setState({
            amount: ""
        });
    }
    render() {
        return (
            <div> 
                <Popup trigger={
                    <Form size='tiny' onSubmit={this.handleSubmit}>
                    
                        <Form.Input fluid
                            label="Funds $$"
                            name="amount"
                            value={this.state.amount}
                            onChange={this.handleOnChange}
                            className="form-control"
                        />
                        <input type="submit" />
                    
                    </Form>
                } >
                    <Popup.Header>Important!</Popup.Header>
                    <Popup.Content>
                        <p>** Do not add commas or $ to funds input.** </p>
                        <p>Entering a new amount will reset the total funds to the amount just entered, so if you are simply adding an amount to the current total, make sure to enter the entire total... not just the amount to be added.</p>
                        <p>After a new gift is added, the price will automatically be deducted from your total fund amount!</p>
                    </Popup.Content>
                </Popup>
            </div>
        )
    }
}; 
export default connect(null,{ createFund })(FundsForm);