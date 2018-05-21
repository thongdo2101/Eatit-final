import React, { Component } from 'react';
class FoodName extends Component {
  render() {
    return (
      <div>
            <div className="food">
              <h3 className = "food_name">{this.props.name}</h3>
              <img className="img" src={this.props.imageURL} alt="" width="100%" />
              <p>{this.props.description}</p>
            </div>
          </div>


    );
  }
}

export default FoodName;