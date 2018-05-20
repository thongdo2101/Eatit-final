import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Logo from "../components/Logo.js";
import SearchField from "../components/SearchField";
import FoodImage from "../components/FoodImage";
import Footer from "../components/Footer";

class SearchScreen extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div class="container" id="background">
          <Logo />
          <SearchField />
          <FoodImage />
          <Footer />
        </div>
      </div>
    );
  }
}

export default SearchScreen;
