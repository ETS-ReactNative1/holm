import React, { Component } from "react";
import { Consumer } from "../Context";
import ProductMenuBar from "./ProductMenuBar";
import Description from "./Description";
import Carousel from "./Carousel";
import Cart from "./Cart";
import Menu from "./Menu";
import { CSSTransition } from "react-transition-group";

class Product extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          if (value.state.products[this.props.match.params.productId]) {
            const product =
              value.state.products[this.props.match.params.productId];
            return (
              <CSSTransition
                in={true}
                appear={true}
                classNames="product-page"
                timeout={2000}
              >
                <div className="product">
                  <Menu history={this.props.history} />
                  <ProductMenuBar history={this.props.history} />
                  <Description product={product} />
                  <Carousel product={product} />
                  <Cart />
                </div>
              </CSSTransition>
            );
          }
        }}
      </Consumer>
    );
  }
}

export default Product;
