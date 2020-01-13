import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import GiftList from '../components/GiftList';
import GiftForm from '../components/GiftForm';
import GiftShow from '../components/GiftShow';
// import FundsContainer from './FundsContainer';
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
        ]
        return (
            <div>
                <div className="container">
                <Tab menu={{ fluid: true, vertical: true, tabular: true }} grid={{ paneWidth: 12, tabWidth: 2 }} panes={panes} />
                </div>
                <Route path="/gifts/:id" render={props => {
                    return (
                        <GiftShow gift={this.props.gifts.find(g => g.id === props.match.params.id)} />
                    );
                }}
                />

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
export default connect(mapStateToProps, { fetchGifts, destroyGift })(GiftContainer);

