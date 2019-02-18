import React, { Component } from "react";
import ProductThumbnail from "./ProductThumbnail";
import { Consumer } from "../Context";

class SimilarProducts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { state, selectProduct, resetIndex } = value;
          return (
            <div className="similar-products-wrapper">
              <ul className="similar-products">
                {Object.keys(state.products).map(key => (
                  <li key={key}>
                    <ProductThumbnail
                      index={key}
                      history={this.props.history}
                      details={state.products[key]}
                      selectProduct={selectProduct}
                      resetIndex={resetIndex}
                    />
                  </li>
                ))}
              </ul>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default SimilarProducts;
