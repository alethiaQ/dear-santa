import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import GiftContainer from './containers/GiftContainer';
import GiftForm from './components/GiftForm';
import FundsContainer from './containers/FundsContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">  
          <div className="row title justify-content-center" style={{ paddingTop: '12px' }}>
            <h1>Dear Santa </h1><h4>A holiday gift-list manager</h4>
            
            <br></br>
          </div>
          <Route path="/" render={routerProps => <GiftContainer {...routerProps}/>}/>         
         <Route  path="/newGift" component={GiftForm} />
        <Route exact path= "/funds" component={FundsContainer} />
        </div>
      </Router>
    );
  }
};

export default App;

