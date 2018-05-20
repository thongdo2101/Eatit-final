import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import FoodInfo from '../components/FoodInfo';
import FoodName from '../components/FoodName';
import logo from '../img/logo3.png';
import Layer_Left from '../img/Layer 3.png';
import Layer_Right from '../img/Layer 3 copy.png';
class DetailsScreen extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div id="flex">
          <img src={Layer_Left} alt="" />
          <div className="container" id="background">

            <div className="row">
              <div className="logo">
                <img src={logo} alt="logo" width="100%" />
              </div>

            </div>
            <div className = "row"> 
            <div className = "col-md-6">
            <FoodName />
            </div>
            <div className = "col-md-6">
            <FoodInfo />
            </div>
            </div>


            <div className="row">
              <p className="footer">©2018 Techkids - Web Fullstack Gen 11 Hackathon
        </p>
            </div>

          </div>
          <img src={Layer_Right} alt="" />
        </div>
      </div>
    );
  }
}

export default DetailsScreen;