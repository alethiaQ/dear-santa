import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Funds from './components/Funds';
import GiftContainer from './containers/GiftContainer';
import GiftForm from './components/GiftForm';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">  
          <div className="row title justify-content-center" style={{ paddingTop: '12px' }}>
            <h1>Dear Santa: A holiday gift-list manager</h1>
          </div>
          <Route path="/" render={routerProps => <GiftContainer {...routerProps}/>}/>         
         <Route  path="/newGift" component={GiftForm} />
        <Route exact path= "/funds" component={Funds} />
        </div>
      </Router>
    );
  }
};

export default App;

