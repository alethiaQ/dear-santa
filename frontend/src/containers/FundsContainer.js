import React, { Component } from 'react';
import { connect } from 'react-redux';
import FundsForm from '../components/FundsForm';
import FundsCard from '../components/FundsCard';
import { fetchFunds } from "../actions/funds";
class FundsContainer extends Component {

    componentDidMount() {
        this.props.fetchFunds();
    };  

    render() {
        return (
            <div>
            <FundsForm />
            <FundsCard funds={this.props.funds}/>
            </div>
        )
    }
}
function mapStateToProps({ funds }) {
    return { funds };
};
export default connect(mapStateToProps, { fetchFunds })(FundsContainer);