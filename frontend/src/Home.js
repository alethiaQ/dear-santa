import React, { Component } from 'react';
import GiftContainer from './containers/GiftContainer';
import FundsContainer from './containers/FundsContainer';
class Home extends Component {
    render() {
        return(
        <div>
            <GiftContainer />
            <FundsContainer />
        </div>
        )
    };
};
export default Home;