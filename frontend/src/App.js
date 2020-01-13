import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import GiftContainer from './containers/GiftContainer';
// import GiftForm from './components/GiftForm';
import FundsContainer from './containers/FundsContainer';
// import Home from "./Home";

class App extends Component {

  render() {
    return (
      <Router>
        <div >  
          {/* <Route path="/" component={Home} /> */}
          <Route path="/" render={routerProps => <GiftContainer {...routerProps} />}/>         
          <FundsContainer />
        </div>
      </Router>
    );
  }
};

export default App;

