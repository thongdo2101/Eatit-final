import React, { Component } from "react";

class FoodInfo extends Component {
  render() {
    if (this.props.ingredients) {
      var ingredientsRender = this.props.ingredients.map((item, index) => (
        <span key={index}>
          {item.name} : {item.quantity}
          <br />
        </span>
      ));
      return (
        <div>
          <div className="food_info">
            <h3>NGUYÊN LIỆU</h3>
            <p>{ingredientsRender}</p>
          </div>
        </div>
      );
    } else return "";
  }
}

export default FoodInfo;
