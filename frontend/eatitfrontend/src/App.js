import React, { Component } from "react";
import DetailsScreen from "./containers/DetailsScreen";
import SearchScreen from "./containers/SearchScreen";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route } from 'react-router-dom';



class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <div>
          <Route exact path="/" component={SearchScreen} />
          <Route path="/foods/:id" component={DetailsScreen} />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
