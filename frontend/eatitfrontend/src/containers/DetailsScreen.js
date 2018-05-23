import React, { Component } from "react";
import NavBar from "../components/NavBar";
import FoodInfo from "../components/FoodInfo";
import FoodName from "../components/FoodName";
import Footer from "../components/Footer";
import Steps from "../components/Steps";
import Logo from "../components/Logo"
import SeeMoreButton from "../components/SeeMoreButton";
import logo from "../img/logo.png";
import axios from "../axios";
class DetailsScreen extends Component {
  state = {
    flag: false,
    nameButton: "CÁCH LÀM"
  };

  componentDidMount() {
    axios
      .get(`/api/foods/${this.props.match.params.id}`)
      .then(data => {
        var food = data.data;
        console.log(data.data.ingredients);
        this.setState({
          name: food.name,
          description: food.description,
          imageURL: food.imageURL,
          ingredients: food.ingredients,
          steps: food.steps
        });
      })
      .catch(err => console.error(err));
  }
  onClickSeeMoreButton = () => {
    if (this.state.flag) {
      this.setState({ flag: false, nameButton: "CÁCH LÀM" });
    } else {
      this.setState({ flag: true, nameButton: "NGUYÊN LIỆU" });
    }
  };
  render() {
    return (
      <div>
        <NavBar />
        <div id="flex">
          <div className="container" id="background">
            <div className="row">
              <div className="logo">
                <img src={logo} alt="logo" width="100%" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <FoodName
                  name={this.state.name}
                  description={this.state.description}
                  imageURL={this.state.imageURL}
                />
              </div>
              <div className="col-md-6">
                <SeeMoreButton
                  onClickSeeMoreButton={this.onClickSeeMoreButton}
                  flag={this.state.flag}
                  nameButton={this.state.nameButton}
                />
                {!this.state.flag ? (
                  <FoodInfo ingredients={this.state.ingredients} />
                ) : (
                  <Steps steps={this.state.steps} />
                )}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default DetailsScreen;
