import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Logo from "../components/Logo.js";
import SearchField from "../components/SearchField";
import FoodImage from "../components/FoodImage";
import Footer from "../components/Footer";
import Layer_Left from "../img/Layer 3.png";
import Layer_Right from "../img/Layer 3 copy.png";
import axios from "../axios";

class SearchScreen extends Component {
  state = {
    tagInput: "",
    tagList: [],
    tagListForShow: [],
    choosedTagList: [],
    foodList: [],
    choosedFoods: []
  };

  _getTagInput = input => {
    this.setState({
      tagInput: input
    });
  };
  _filerTag() {
    const filterTag = this.state.tagList.filter(tag =>
      tag.name.includes(this.state.tagInput)
    );
    setTimeout(() => {
      this.setState({
        tagListForShow: this.state.tagInput === "" ? [] : filterTag
      });
    }, 500);
  }
  componentDidMount() {
    axios.get(`/api/ingredients/`).then(response => {
      this.setState({
        tagList: response.data
      });
    });
  }
  _removeIngredient(tag) {
    var newChoosedTag = this.state.choosedTagList;
    newChoosedTag.forEach((item, index) => {
      if (item._id === tag._id) {
        newChoosedTag.splice(index, 1);
      }
    });
    this.setState({
      choosedTagList: newChoosedTag,
      tagInput: "",
      tagListForShow: [],
      choosedFoods: []
    });
  }
  _clickIngredient(tag) {
    var newChoosedTag = this.state.choosedTagList;
    newChoosedTag.push(tag);
    this.setState({
      choosedTagList: newChoosedTag,
      tagInput: "",
      tagListForShow: []
    });
    var ingreList = this.state.choosedTagList.map(tag => tag.name);
    axios
      .post(`/api/foods/ingredients/`, {
        userInput: ingreList
      })
      .then(response => {
        console.log(response);
        this.setState({
          choosedFoods: response.data
        });
        console.log(this.state.choosedFoods);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    this._filerTag();

    var tagListForShowRender = this.state.tagListForShow.map((tag, index) => (
      <button
        key={index}
        className="btn btn-info ml-1 col-md-2 mb-2"
        onClick={event => this._clickIngredient(tag)}
      >
        {tag.name}
      </button>
    ));
    var choosedTagListRender = this.state.choosedTagList.map((tag, index) => (
      <button
        key={index}
        className="btn btn-success ml-1 mb-2 col-md-2"
        onClick={event => this._removeIngredient(tag)}
      >
        {tag.name}
      </button>
    ));
    return (
      <div>
        <NavBar />
        <div id="flex">
          <img src={Layer_Left} alt="" />
          <div className="container" id="background">
            <Logo />
            <div className="food_info_lite d-flex justify-content-center row">
              {choosedTagListRender}
            </div>
            <SearchField
              getTagInput={this._getTagInput}
              reNewTagInput={this.state.tagInput}
            />
            <div className="food_info_lite d-flex justify-content-center row">
              {tagListForShowRender}
            </div>
            <div className="">
              <FoodImage foods={this.state.choosedFoods} />
            </div>
            <Footer />
          </div>
          <img src={Layer_Right} alt="" />
        </div>
      </div>
    );
  }
}

export default SearchScreen;
