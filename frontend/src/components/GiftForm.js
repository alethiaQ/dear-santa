import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createGift } from "../actions/gifts";
import { Form, Radio } from 'semantic-ui-react'

 class GiftForm extends Component {
    state = {
        name: "",
        price: "",
        url: "",
        category: ""
        // progress: 'incomplete'
    };
     handleRadio = event => {
         this.setState({
             category: event.target.value
         });
    }
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
            category: ""
        });
    }
    render() {
        return (
            <div>
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
                        <label>Category</label>
                        <Form.Field
                        control={Radio}
                        label="parents"
                        name="category"
                        value="parents"
                        // checked={value === 'parents'}
                        onChange={this.handleRadio}
                        className="form-control"
                        />
                         <Form.Field
                        control={Radio}
                        label="friends"
                        name="category"
                        value="friends"
                        // checked={value === 'friends'}
                        onChange={this.handleRadio}
                        className="form-control"
                        />
                         <Form.Field
                        control={Radio}
                        label="family"
                        name="category"
                        value="family"
                        // checked={value === 'family'}
                        onChange={this.handleRadio}
                        className="form-control"
                        />
                         <Form.Field
                        control={Radio}
                        label="kids"
                        name="category"
                        value="kids"
                        // checked={value === 'kids'}
                        onChange={this.handleRadio}
                        className="form-control"
                        />
                         <Form.Field
                        control={Radio}
                        label="other"
                        name="category"
                        value="other"
                        // checked={value === 'other'}
                        onChange={this.handleRadio}
                        className="form-control"
                        />                      
                    </Form.Group>
                  
                    <input type="submit" />
                </Form>
            </div>
        );
    }
};


// const mapDispatchToProps = dispatch => {
//     return {
//         addGift: gift => dispatch({type: ADD_GIFT, gift})
//     };
// };
// const mapDispatchToProps = dispatch => (
//     { addGift: gift => dispatch({ type: 'ADD_GIFT', gift }) }
// );
export default connect(null, {createGift})(GiftForm);
