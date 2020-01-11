import React, { Component } from 'react'; 
import { Form } from 'semantic-ui-react'
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
                <Form size='tiny' onSubmit={this.handleSubmit}>
                    <Form.Group widths='equal'>
                    <Form.Input fluid 
                            label="Total Funds"
                            name="amount"
                            value={this.state.amount}
                            onChange={this.handleOnChange}
                            className="form-control"
                        />
                    <input type="submit" />
                    </Form.Group>
                </Form>  
             
            </div>
        )
    }
}; 
export default connect(null,{ createFund })(FundsForm);