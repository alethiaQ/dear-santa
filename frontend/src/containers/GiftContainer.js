import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import GiftShow from '../components/GiftShow';
import GiftList from '../components/GiftList';
import GiftForm from '../components/GiftForm';
import Funds from '../components/Funds';
import { Tab } from 'semantic-ui-react';
import { fetchGifts, destroyGift } from "../actions/gifts";

class GiftContainer extends Component {

    componentDidMount() {
        this.props.fetchGifts();
    };
    render() {   
        const panes = [
            { menuItem: 'Gift List', render: () => <GiftList gifts={this.props.gifts} /> },
            { menuItem: 'New Gift', render: () => <Tab.Pane><GiftForm /></Tab.Pane> },
            {menuItem: 'Funds', render: () => <Tab.Pane><Funds /></Tab.Pane>}
        ]
        return (
            <div>
                <Tab menu={{ fluid: true, vertical: true, tabular: true }} grid={{ paneWidth: 12, tabWidth: 2 }} panes={panes} />
                {/* <Route exact path={`${this.props.match.url}gifts/:giftId`} render={routerProps => <GiftShow {...routerProps} gifts={this.props.gifts} />}/> */}
            </div>
        )
    };
};
// const mapDispatchToProps = dispatch => (
//     { addGift: gift => dispatch({ type: 'ADD_GIFT', gift }) }
// );
function mapStateToProps({ gifts }) {
    return { gifts };
};
export default connect(mapStateToProps, { fetchGifts, destroyGift })(GiftContainer);
