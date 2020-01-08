import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar';
import Funds from './components/Funds';
import GiftContainer from './containers/GiftContainer';
import GiftForm from './components/GiftForm';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">  
        <div className="row title justify-content-center" style={{ paddingTop: '12px' }}>
          <h1>Holiday Gift List</h1>
        </div>
        {/* Form for new gift on top of page, all current gifts displayed on bottom */}
        <NavBar />
          <Route exact path="/newGift" component={GiftForm} />
          <Route exact path="/gifts" component={GiftContainer} />
        <Route exact path= "/funds" component={Funds} />
          
        
        </div>
        </Router>
    );
  }
};

export default App;

