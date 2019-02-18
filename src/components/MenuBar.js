import React, { Component } from "react";
import MenuButton from "./MenuButton";
import MenuIndex from "./MenuIndex";

class MenuBar extends Component {
  render() {
    return (
      <div className="menu-bar">
        <MenuButton />
        <MenuIndex />
      </div>
    );
  }
}

export default MenuBar;
