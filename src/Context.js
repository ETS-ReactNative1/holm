import React, { Component } from "react";
import products from "./sampleProducts";

const Context = React.createContext();

class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products,
      order: {},
      currentIndex: 0,
      quantity: 0,
      isCartOn: false,
      isMenuOn: false
    };
  }

  componentDidMount() {
    const localStorageOrder = JSON.parse(localStorage.getItem("order")) || {};
    const localStorageQuan = localStorage.getItem("quantity") || 0;
    this.setState({
      order: localStorageOrder,
      quantity: localStorageQuan
    });
  }

  componentDidUpdate() {
    localStorage.setItem("quantity", this.state.quantity);
    localStorage.setItem("order", JSON.stringify(this.state.order));
  }

  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          selectImage: index => {
            this.setState({
              currentIndex: index
            });
          },
          resetIndex: () => {
            this.setState({
              currentIndex: 0
            });
          },
          addToCart: key => {
            const order = { ...this.state.order };
            order[key] = order[key] + 1 || 1;
            this.setState({
              order: order,
              quantity: parseFloat(this.state.quantity) + 1
            });
          },
          removeFromCart: key => {
            const order = { ...this.state.order };
            this.setState({
              quantity: this.state.quantity - order[key]
            });
            delete order[key];
            this.setState({ order });
          },
          addQuan: key => {
            const order = { ...this.state.order };
            order[key] = order[key] + 1;
            this.setState({
              order: order,
              quantity: this.state.quantity + 1
            });
          },
          minusQuan: key => {
            const order = { ...this.state.order };
            order[key] = order[key] - 1;
            if (order[key] < 1) {
              return;
            }
            this.setState({
              order: order,
              quantity: this.state.quantity - 1
            });
          },
          toggleCart: () => {
            this.setState({
              isCartOn: !this.state.isCartOn
            });
          },
          toggleMenu: () => {
            this.setState({
              isMenuOn: !this.state.isMenuOn
            });
          }
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export { Provider };
export const Consumer = Context.Consumer;
