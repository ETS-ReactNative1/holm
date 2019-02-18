import React, { Component } from "react";
import { Consumer } from "../Context";

class MenuButton extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { toggleMenu } = value;
          return (
            <button
              className="icon menu-button menu-trigger"
              onClick={toggleMenu}
            >
              <span />
            </button>
          );
        }}
      </Consumer>
    );
  }
}

export default MenuButton;
