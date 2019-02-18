import React, { Component } from "react";
import MenuBar from "./MenuBar";
import { Consumer } from "../Context";
import ProductCell from "./ProductCell";
import Menu from "./Menu";
import { CSSTransition } from "react-transition-group";

class Products extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          if (value.state.products) {
            const { products } = value.state;
            return (
              <div className="products">
                <Menu history={this.props.history} />
                <MenuBar />
                <CSSTransition
                  in={true}
                  appear={true}
                  timeout={2000}
                  classNames="fade"
                >
                  <div className="products-grid">
                    <span className="loading">H . O . L . M</span>
                    {Object.keys(products).map(key => (
                      <ProductCell
                        product={products[key]}
                        history={this.props.history}
                        resetIndex={value.resetIndex}
                        key={key}
                      />
                    ))}
                  </div>
                </CSSTransition>
              </div>
            );
          }
        }}
      </Consumer>
    );
  }
}

export default Products;
