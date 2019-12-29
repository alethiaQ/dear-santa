import React, { Component } from 'react'
import { connect } from 'react-redux';
import { ADD_GIFT } from '../actions/gifts';
import { Form } from 'semantic-ui-react'

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
               
                {/* <Form.Group widths='equal'>
          <Form.Input fluid label='First name' placeholder='First name' />
          <Form.Input fluid label='Last name' placeholder='Last name' />
          <Form.Select
            fluid
            label='Gender'
            options={options}
            placeholder='Gender'
          />
        </Form.Group> */}
                 <Form onSubmit={this.handleSubmit}>
                    <Form.Group widths='equal'>
                        <Form.Input fluid 
                            label="Item"
                            name="item"
                            value={this.state.item}
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
                        </Form.Group>

                   
                    
                    
                    <Form.Group inline>
                        <label>Gift group: </label>
                        <Form.Radio
                            label='Medium'
                            value='md'
                            // checked={value === 'md'}
                            // onChange={this.handleChange}
                        />
                    </Form.Group>
                    <input type="submit" />
                </Form>
            </div>
        );
    }
};
{/* <Form.Group inline>
<label>Size</label>
<Form.Radio
  label='Small'
  value='sm'
  checked={value === 'sm'}
  onChange={this.handleChange}
/>
<Form.Radio
  label='Medium'
  value='md'
  checked={value === 'md'}
  onChange={this.handleChange}
/>
<Form.Radio
  label='Large'
  value='lg'
  checked={value === 'lg'}
  onChange={this.handleChange}
/>
</Form.Group> */}

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