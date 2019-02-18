import React, { Component } from "react";
import { formatPrice } from "../helpers";
import { hoverEffect } from "../hover";

class ProductCell extends Component {
  cellRef = React.createRef();
  image1Ref = React.createRef();
  image2Ref = React.createRef();
  hover = null;

  state = {
    imageLoaded: false
  };

  imageLoadedHandler = () => {
    this.setState({
      imageLoaded: true
    });
  };

  goToProduct = () => {
    const productName = this.props.product.id;
    this.props.history.push(`/product/${productName}`);
    this.props.resetIndex();
  };

  checkRef = () => {
    console.log(this.image1Ref.current.getAttribute("src"));
  };

  initHoverEffect = () => {
    return new hoverEffect({
      parent: this.cellRef.current,
      intensity: 0.2,
      speedIn: 0.8,
      speedOut: 0.8,
      easing: undefined,
      hover: undefined,
      image1: this.image1Ref.current.getAttribute("src"),
      image2: this.image2Ref.current.getAttribute("src"),
      displacementImage: "/images/displacement/4.png"
    });
  };

  onEnterHandler = () => {
    this.hover.onEnterHandler();
  };

  onLeaveHandler = () => {
    this.hover.onLeaveHandler();
  };

  componentDidMount() {
    this.hover = this.initHoverEffect();
  }

  componentWillUnmount() {
    this.hover = null;
  }

  render() {
    const { product } = this.props;
    return (
      <div
        className={
          this.state.imageLoaded
            ? "product-cell loaded"
            : "product-cell loading"
        }
        onClick={this.goToProduct}
        onMouseEnter={this.onEnterHandler}
        onMouseLeave={this.onLeaveHandler}
        ref={this.cellRef}
      >
        <div>
          <img
            src={product.images[0]}
            alt={product.name}
            ref={this.image1Ref}
            onLoad={this.imageLoadedHandler}
          />
          <img
            src={product.images[3]}
            alt={product.name}
            ref={this.image2Ref}
          />
        </div>
        <div className="product-cell-name-price">
          <span>{product.name}</span>
          <span>{formatPrice(product.price)}</span>
        </div>
      </div>
    );
  }
}

export default ProductCell;
