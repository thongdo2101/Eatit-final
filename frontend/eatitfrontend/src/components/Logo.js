import React, { Component } from 'react';
import logo from "../img/logo.png"
class Logo extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="logo">
                        <img src={logo} alt="" width="100%" />
                    </div>

                </div>
                <div className="row logo_description">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">Trang web tìm kiếm món ăn cho coder lớn nhất Techkids :D</div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        );
    }
}

export default Logo;