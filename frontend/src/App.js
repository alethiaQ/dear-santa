import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import GiftContainer from './containers/GiftContainer';
import FundsContainer from './containers/FundsContainer';
import { Grid, Menu, Icon } from 'semantic-ui-react';
import NavBar from './components/NavBar';
import About from './components/About';

class App extends Component {

  render() {
    return (
      <Router>
        <div >  
          <NavBar />      
          <Route exact path="/about" component={About} />
          <Grid relaxed columns={2} divided padded>
            <Grid.Column>
              <Route path="/" render={routerProps => <GiftContainer {...routerProps} />} />   
            </Grid.Column> 
            <Grid.Column width={4}>  
              <FundsContainer />
            </Grid.Column>
          </Grid>
        </div>
      </Router>
    );
  }
};

export default App;

