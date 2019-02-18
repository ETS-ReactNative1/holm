import React, { Component } from "react";
import { Consumer } from "../Context";

class Menu extends Component {
  state = {
    blur: false
  };

  mouseEnterHandler = () => {
    this.setState({
      blur: false
    });
  };

  mouseLeaveHandler = () => {
    this.setState({
      blur: true
    });
  };

  goToProducts = () => {
    this.props.history.push(`/products`);
  };
  goToHome = () => {
    this.props.history.push(`/`);
  };
  goToAbout = () => {
    this.props.history.push(`/about`);
  };
  goToContact = () => {
    this.props.history.push(`/contact`);
  };
  render() {
    return (
      <Consumer>
        {value => {
          const { isMenuOn } = value.state;
          const { toggleMenu } = value;
          return (
            <div className={"menu " + (isMenuOn ? "menu-on" : "menu-off")}>
              <button
                className={"menu-home " + (this.state.blur ? "" : "clear")}
                onClick={() => {
                  toggleMenu();
                  this.goToHome();
                }}
              >
                <h1>Home</h1>
              </button>
              <button
                className={"menu-products " + (this.state.blur ? "" : "clear")}
                onClick={() => {
                  toggleMenu();
                  this.goToProducts();
                }}
              >
                <h1>
                  Products
                  <span />
                </h1>
              </button>
              <button
                className={"menu-about " + (this.state.blur ? "" : "clear")}
                onClick={() => {
                  toggleMenu();
                  this.goToAbout();
                }}
              >
                <h1>About</h1>
              </button>
              <button
                className={"menu-close " + (this.state.blur ? "" : "clear")}
                onClick={toggleMenu}
              >
                <h1>Close</h1>
              </button>
              <button
                className={"menu-contact " + (this.state.blur ? "" : "clear")}
                onClick={() => {
                  toggleMenu();
                  this.goToContact();
                }}
              >
                <h1>Contact</h1>
              </button>
              <div
                className="menu-placeholder-1"
                onMouseEnter={this.mouseEnterHandler}
                onMouseLeave={this.mouseLeaveHandler}
              />
              <div
                className="menu-placeholder-2"
                onMouseEnter={this.mouseEnterHandler}
                onMouseLeave={this.mouseLeaveHandler}
              />
              <div
                className="menu-placeholder-3"
                onMouseEnter={this.mouseEnterHandler}
                onMouseLeave={this.mouseLeaveHandler}
              />
              <div
                className="menu-placeholder-4"
                onMouseEnter={this.mouseEnterHandler}
                onMouseLeave={this.mouseLeaveHandler}
              />
              <div className="backdrop">
                <span className="col col-1" />
                <span className="col col-2" />
                <span className="row row-1" />
                <span className="row row-2" />
                <span className="row row-3" />
                <span className="row row-4" />
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Menu;
