import React, { Component } from 'react';
import SearchButton from "./SearchButton";

class SearchField extends Component {
    render() {
        return (
            <div className="row search_form">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <form className="form-wrapper cf">
                        <input type="text" placeholder="Enter your search here..." required />
                        <SearchButton/>
                    </form>
                </div>
                <div className="col-md-2"></div>

            </div>
        );
    }
}

export default SearchField;