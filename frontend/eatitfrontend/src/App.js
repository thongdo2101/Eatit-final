import React, { Component } from 'react';
import DetailsScreen from './containers/DetailsScreen';
import SearchScreen from './containers/SearchScreen';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
class App extends Component {
  render() {
    return (
      <div>
            <DetailsScreen />        
      </div>
    );
  }
}

export default App;
