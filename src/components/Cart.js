import React, { Component } from "react";
import { Consumer } from "../Context";
import { formatPrice } from "../helpers";
import CartItem from "./CartItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Cart extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { isCartOn, order, products } = value.state;
          const { toggleCart, removeFromCart, addQuan, minusQuan } = value;
          const orderIds = Object.keys(order);
          const total = orderIds.reduce((prevTotal, key) => {
            const price = products[key].price;
            const quantity = order[key];
            return prevTotal + price * quantity;
          }, 0);
          return (
            <div className={"cart " + (isCartOn ? "cart-on" : "cart-off")}>
              <button className="icon close-cart" onClick={toggleCart}>
                <span />
              </button>
              <div className="cart-total-wrapper">
                <TransitionGroup component="ul" className="cart-item-wrapper">
                  {Object.keys(order).map(key => {
                    const product = products[key];
                    const productQuan = order[key];
                    return (
                      <CSSTransition
                        key={key}
                        timeout={{ exit: 400 }}
                        classNames="slide"
                      >
                        <CartItem
                          index={key}
                          product={product}
                          productQuan={productQuan}
                          removeFromCart={removeFromCart}
                          addQuan={addQuan}
                          minusQuan={minusQuan}
                        />
                      </CSSTransition>
                    );
                  })}
                </TransitionGroup>
                <div className="checkout-total">
                  Sub Total: {formatPrice(total)}
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Cart;
