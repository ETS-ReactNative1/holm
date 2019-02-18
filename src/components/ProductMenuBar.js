import React, { Component } from "react";
import SimilarProducts from "./SimilarProducts";
import MenuBar from "./MenuBar";

class ProductMenuBar extends Component {
  render() {
    return (
      <div className="product-menu-bar">
        <MenuBar />
        <SimilarProducts history={this.props.history} />
      </div>
    );
  }
}

export default ProductMenuBar;
