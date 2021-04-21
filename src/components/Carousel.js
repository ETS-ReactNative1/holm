import React, { Component } from "react";
import { Consumer } from "../Context";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Carousel extends Component {
  state = {
    isActive: false
  };
  render() {
    const { name, images, id } = this.props.product;
    return (
      <Consumer>
        {value => {
          const { currentIndex, quantity } = value.state;
          const { selectImage, addToCart, toggleCart } = value;
          return (
            <div className="carousel">
              <div className="cart-wrapper">
                <div className="placeholder" />
                <button
                  className={
                    this.state.isActive
                      ? "shopping-cart active"
                      : "shopping-cart"
                  }
                  onClick={toggleCart}
                >
                  <span>Cart</span>{" "}
                  <TransitionGroup component="span" className="quantity-count">
                    <CSSTransition
                      classNames="quantity"
                      key={quantity}
                      timeout={{ enter: 250, exit: 250 }}
                    >
                      <span>{quantity}</span>
                    </CSSTransition>
                  </TransitionGroup>
                </button>
              </div>
              
              <img
                src={images[currentIndex]}
                alt={name}
                className="display-image"
              />
              
              <div className="purchase-button-wrapper">
                <button className="save-for-later">
                  <span className="hover-anim">Save for later</span>
                </button>
                <button
                  className="add-to-cart"
                  onClick={() => {
                    addToCart(id);
                    this.setState({
                      isActive: true
                    });
                    setTimeout(() => {
                      this.setState({
                        isActive: false
                      });
                    }, 300);
                  }}
                >
                  <span className="hover-anim">Add to cart</span>
                </button>
              </div>
              <div className="product-image-list">
                {images.map((image, index) => (
                  <img
                    key={index}
                    index={index}
                    src={image}
                    alt="shoe"
                    className="image-thumbnails"
                    onClick={() => selectImage(index)}
                  />
                ))}
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Carousel;
