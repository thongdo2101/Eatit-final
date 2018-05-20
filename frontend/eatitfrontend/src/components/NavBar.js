import React, { Component } from 'react';
import logo from "../img/logo2.png";

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" width="50%" />
          </a>

        </nav>
      </div>
    );
  }
}

export default NavBar;