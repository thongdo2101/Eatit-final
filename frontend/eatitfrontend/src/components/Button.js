import React, { Component } from "react";
import { Link } from "react-router-dom";

class Button extends Component {
  render() {
    return (
      <div className="button_center">
        <Link to={`/foods/${this.props.id}`}>
          <button type="button" className="details_button">
            KHÁM PHÁ
          </button>
        </Link>
      </div>
    );
  }
}

export default Button;
