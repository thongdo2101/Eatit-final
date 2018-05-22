import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Logo from "../components/Logo.js";
import SearchField from "../components/SearchField";
import FoodImage from "../components/FoodImage";
import Footer from "../components/Footer";
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
      tagInput: input.toLocaleLowerCase()
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
    }, 100);
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
    var newTagList = this.state.tagList;
    newTagList.push(tag);
    this.setState({
      choosedTagList: newChoosedTag,
      tagList: newTagList
    });
    this._getFoods();
  }
  _clickIngredient(tag) {
    var newChoosedTag = this.state.choosedTagList;
    newChoosedTag.push(tag);
    var newTagList = this.state.tagList;
    newTagList.forEach((item, index) => {
      if (item._id === tag._id) {
        newTagList.splice(index, 1);
      }
    });
    this.setState({
      choosedTagList: newChoosedTag,
      tagList: newTagList
    });
    this._getFoods();
  }
  _getFoods() {
    var ingreList = this.state.choosedTagList.map(nTag => nTag.name);
    axios
      .post(`/api/foods/ingredients/`, {
        userInput: ingreList
      })
      .then(response => {
        setTimeout(() => {
          this.setState({
            choosedFoods: response.data
          });
        }, 200);
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
        data-toggle="tooltip" 
        data-placement="bottom" 
        title="nhấp để chọn nguyên liệu này"
      >
        {tag.name}
      </button>
    ));
    var choosedTagListRender = this.state.choosedTagList.map((tag, index) => (
      <button
        key={index}
        className="btn btn-success ml-1 mb-2 col-md-2"
        onClick={event => this._removeIngredient(tag)}
        data-toggle="tooltip" 
        data-placement="bottom" 
        title="nhấp để bỏ nguyên liệu này"
      >
        {tag.name} <i className="fas fa-check"></i>
      </button>
    ));
    return (
      <div>
        <NavBar />
        <div id="flex">
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
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default SearchScreen;
