import React, { Component } from "react";
import logo from "../img/logo2.png";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            <img className="navbar_logo" src={logo} alt="" width="100%" />
          </Link>
        </nav>
      </div>
    );
  }
}

export default NavBar;
