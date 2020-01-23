import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import GiftList from '../components/GiftList';
import GiftForm from '../components/GiftForm';
import GiftShow from '../components/GiftShow';
// import FundsContainer from './FundsContainer';
import { Tab } from 'semantic-ui-react';
import { fetchGifts, destroyGift, likeGift } from "../actions/gifts";
class GiftContainer extends Component {
    
    componentDidMount() {
        this.props.fetchGifts();
    };
    render() {
        const panes = [
            { menuItem: 'Gift-Bag', render: () => <Tab.Pane> <GiftList gifts={this.props.gifts} handleDestroy={this.props.destroyGift} handleLike={this.props.likeGift} /></Tab.Pane> },
            { menuItem: 'New Gift', render: () => <Tab.Pane><GiftForm /></Tab.Pane> },
        ]
        return (
            <div>
                 <Route exact path={`/gifts/:id`} render={routerProps => 
                    <GiftShow {...routerProps} gifts={this.props.gifts} /> }
                />
                <div className="container">
                <Tab menu={{ secondary: true, pointing: true }} grid={{ paneWidth: 12, tabWidth: 2 }}  panes={panes} />
                </div>
               

            </div>
        );
    }
}

// const mapDispatchToProps = dispatch => (
//     { addGift: gift => dispatch({ type: 'ADD_GIFT', gift }) }
// );
function mapStateToProps({ gifts }) {
    return { gifts };
};
export default connect(mapStateToProps, { fetchGifts, destroyGift, likeGift })(GiftContainer);

