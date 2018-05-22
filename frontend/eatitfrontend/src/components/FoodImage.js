import React, { Component } from "react";
import Button from "./Button";
import img from "../img/recipe16041-635824303919364530.jpg";

class FoodImage extends Component {
  render() {
    var foodsRender =
      this.props.foods.length !== 0
        ? this.props.foods.map((food, index) => (
            <div className="col-md-4 mmt" key={index}>
              <div className="details">
                <img src={food.imageURL} alt="" width="100%" />
                <h4>{food.name.toLocaleUpperCase()}</h4>
                <p>
                  {food.description.length > 250
                    ? food.description.substring(0, 250) + "..."
                    : food.description}
                </p>
                  <Button id={food._id} />
              </div>
            </div>
          ))
        : "";
    return <div className="row food_info_lite">{foodsRender}</div>;
  }
}

export default FoodImage;
