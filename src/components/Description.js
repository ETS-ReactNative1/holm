import React, { Component } from "react";
import { Consumer } from "../Context";
import { formatPrice } from "../helpers";
import Collapse from "./Collapse";

class Description extends Component {
  state = {
    showDesc: true,
    showReturn: false
  };

  toggleDesc = () => {
    this.setState({
      showDesc: !this.state.showDesc
    });
  };

  toggleReturn = () => {
    this.setState({
      showReturn: !this.state.showReturn
    });
  };
  render() {
    const { name, price, descText, returnText, images } = this.props.product;
    return (
      <Consumer>
        {value => {
          return (
            <div className="detail">
              <div className="detail-title-price">
                <h1 className="detail-title">{name}</h1>
                <span className="detail-price">{formatPrice(price)}</span>
              </div>
              <div className="detail-info">
                <Collapse isDesc={true}>
                  {(show, toggle) => (
                    <div>
                      <button className="info-title" onClick={toggle}>
                        Description
                        <span className="info-toggle">{show ? "-" : "+"}</span>
                      </button>
                      <p>{show && descText}</p>
                    </div>
                  )}
                </Collapse>
                <Collapse isDesc={false}>
                  {(show, toggle) => (
                    <div>
                      <button className="info-title" onClick={toggle}>
                        Delivery & Return
                        <span className="info-toggle">{show ? "-" : "+"}</span>
                      </button>
                      <p>{show && returnText}</p>
                    </div>
                  )}
                </Collapse>
              </div>
              <img
                src={images ? images[3] : null}
                alt={name}
                className="detail-image"
              />
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Description;
