import React, { Component } from "react";
import { formatPrice } from "../helpers";

class CartItem extends Component {
  render() {
    const {
      product,
      productQuan,
      removeFromCart,
      index,
      addQuan,
      minusQuan
    } = this.props;
    return (
      <li className="cart-item">
        <img src={product.images[0]} alt={product.name} />
        <div className="cart-item-name">
          <span>{product.name}</span>
          <span>{formatPrice(product.price)}</span>
        </div>
        <div className="cart-item-quantity">
          <span>
            <button
              className="icon minus-quantity"
              onClick={() => {
                minusQuan(index);
              }}
            >
              <span />
            </button>{" "}
            {productQuan}{" "}
            <button
              className="icon add-quantity"
              onClick={() => {
                addQuan(index);
              }}
            >
              <span />
            </button>
          </span>
          <button
            className="remove-from-cart"
            onClick={() => {
              removeFromCart(index);
            }}
          >
            Remove
          </button>
        </div>
      </li>
    );
  }
}

export default CartItem;
