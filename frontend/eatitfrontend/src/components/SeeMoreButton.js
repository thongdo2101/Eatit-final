import React, { Component } from 'react';

class SeeMoreButton extends Component {
  render() {
    return (
      <div>
        <button class="raise button" onClick = {this.props.onClickSeeMoreButton} >XEM {this.props.nameButton}</button>
      </div>

    );
  }
}

export default SeeMoreButton;