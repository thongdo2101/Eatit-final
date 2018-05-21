import React, { Component } from "react";

class SearchField extends Component {
  _InputChange(inputChanged) {
    if (inputChanged === " ") return;
    this.props.getTagInput(inputChanged);
  }
  render() {
    return (
      <div className="row search_form">
        <div className="col-md-2" />
        <div className="col-md-8">
          <form className="form-wrapper cf">
            <input
              type="text"
              placeholder="Bạn có những nguyên liệu nào trong ngày hôm nay? ^.^"
              required
              onChange={event => {
                this._InputChange(event.target.value);
              }}
              value={this.props.reNewTagInput}
            />
          </form>
        </div>
        <div className="col-md-2" />
      </div>
    );
  }
}

export default SearchField;
