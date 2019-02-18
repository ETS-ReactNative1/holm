import React, { Component } from "react";

class ProductThumbnail extends Component {
  render() {
    const { details, index, history, resetIndex } = this.props;
    return (
      <img
        className="product-thumbnail"
        src={details.images[0]}
        alt={details.name}
        onClick={() => {
          history.push(`/product/${index}`);
          resetIndex();
        }}
      />
    );
  }
}

export default ProductThumbnail;
