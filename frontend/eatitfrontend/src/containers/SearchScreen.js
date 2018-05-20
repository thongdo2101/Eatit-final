import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Logo from "../components/Logo.js";
import SearchField from "../components/SearchField";
import FoodImage from "../components/FoodImage";
import Footer from "../components/Footer";
import TagList from "../components/TagList";
import axios from "../../axios";

class SearchScreen extends Component {
  state = {
    tagInput: "",
    tagList: [],
    choosedTagList: []
  };
  _getTagInput(input) {
    this.setState({
      tagInput: input
    });
  }
  _showSearchTag() {
    axios.get();
  }
  render() {
    return (
      <div>
        <NavBar />
        <div class="container" id="background">
          <Logo />
          <SearchField />
          <TagList getTagList />
          <FoodImage />
          <Footer />
        </div>
      </div>
    );
  }
}

export default SearchScreen;
