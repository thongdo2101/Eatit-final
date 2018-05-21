import React, { Component } from 'react';

class Steps extends Component {
  render() {
    var stepsRender = this.props.steps.map((item, index) => (
      <div key={index}>
        Bước {index + 1}: {item}
        <br />
        <br />
      </div>
    ));
    return (
      <div className="food_info">
        <h3> CÁCH LÀM </h3>
        <p>{stepsRender}</p>
      </div>
    );
  }
}

export default Steps;