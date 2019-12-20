import React, { Component } from 'react';
import './App.css';
import GiftContainer from './containers/GiftContainer';
import GiftForm from './components/GiftForm';

class App extends Component {
  render() {
    return (
      <div className="App">  
        <div className="row title justify-content-center" style={{ paddingTop: '12px' }}>
          <h1>Holiday Gift List</h1>
        </div>
        {/* Form for new gift on top of page, all current gifts displayed on bottom */}
        <GiftForm />
        <GiftContainer />
        
      </div>
    );
  }
};

export default App;

