import React, { Component } from "react";
import SearchButton from "./SearchButton";

class SearchField extends Component {
  state = {
    input: ""
  };
  _getInputTag() {
    this.props.getInputTag(this.state.input);
  }
  _InputChange(inputChanged) {
    this.setState({
      input: inputChanged
    });
  }
  render() {
    return (
      <div className="row search_form">
        <div className="col-md-2" />
        <div className="col-md-8">
          <form className="form-wrapper cf">
            <input
              type="text"
              placeholder="Enter your search here..."
              required
              onChange={event => {
                this._InputChange(event.target.value);
              }}
            />
            <SearchButton getInputTag={this.state._getInputTag} />
          </form>
        </div>
        <div className="col-md-2" />
      </div>
    );
  }
}

export default SearchField;
