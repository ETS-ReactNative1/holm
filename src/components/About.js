import React, { Component } from "react";
import MenuBar from "./MenuBar";
import Menu from "./Menu";
import { CSSTransition } from "react-transition-group";

class About extends Component {
  render() {
    return (
      <div className="about">
        <Menu history={this.props.history} />
        <MenuBar />
        <CSSTransition in={true} appear={true} timeout={3000} classNames="fade">
          <div className="about-wrapper">
            <div className="about-title">
              <h1>HOLM</h1>
            </div>
            <div className="about-banner">
              <img src="/images/about-banner.jpg" alt="banner" />
            </div>
            <div className="about-text">
              <h3>Holm</h3>
              <p>
                Holm is a skateboarding shop and clothing brand based in
                Toronto.
              </p>
              <p>
                The brand caters to the skateboarding, hip hop, and rock
                cultures, as well as to the youth culture in general.
              </p>
              <h3>Story</h3>
              <p>
                The brand specializes in men's, women's and children's lifestyle
                and street wear.
              </p>
            </div>
          </div>
        </CSSTransition>
      </div>
    );
  }
}

export default About;
