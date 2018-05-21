import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Button extends Component {
    render() {
        return (
            <div>
                <Link to = {`/foods/${this.props.id}`} >
                <button type="button" class="details_button">KHÁM PHÁ</button>
                </Link>
            </div>
        );
    }
}

export default Button;