import React, { Component } from 'react';
import img from '../img/recipe15399-635745338739455215.jpg'
class FoodName extends Component {
  render() {
    return (
      <div>
            <div className="food_name">
              <h3>SƯỜN HEO NON XÀO CHUA NGỌT</h3>
              <img className="img" src={img} alt="" width="100%" />
              <p>Sườn heo non xào chua ngọt là món ăn khá quen thuộc với rất nhiều gia đình. Làm sao để miếng sườn heo mềm, đậm
                đà, thơm ngon trong từng miếng cơm đây?</p>
            </div>
          </div>


    );
  }
}

export default FoodName;