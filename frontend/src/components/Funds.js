import React, { Component } from 'react'; 
import { Form } from 'semantic-ui-react'
import { setFunds } from '../actions/funds'; 
import { connect } from 'react-redux';


 class Funds extends Component {
    state = {
        amount: 0
    }
    handleOnChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.setFunds({ ...this.state });
        
    };
    render() {
        return (
            <div> 
                <Form onSubmit={this.handleSubmit}>
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
 }
export default connect(null, { setFunds })(Funds);