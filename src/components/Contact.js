import React, { Component } from "react";
import MenuBar from "./MenuBar";
import Menu from "./Menu";
import { CSSTransition } from "react-transition-group";

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <Menu history={this.props.history} />
        <MenuBar />
        <CSSTransition in={true} appear={true} timeout={3500} classNames="fade">
          <div className="contact-wrapper">
            <div className="contact-dec-circle">
              <span>HOLM +</span>
            </div>
            <div className="contact-banner">
              <img src="/images/holm-banner.jpg" alt="banner" />
            </div>
            <div className="stay-in-touch-wrapper">
              <h1 className="let-stay">Let's stay</h1>
              <h1 className="in-touch">in touch -></h1>
            </div>
            <div className="contact-text-wrapper">
              <p>
                Follow HOLM on social media for daily exclusives delivered
                direct to your news feed, plus lots of extras including
                behind-the-scenes images, bespoke features and more.
              </p>
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
            </div>
          </div>
        </CSSTransition>
      </div>
    );
  }
}

export default Contact;
