import React, { Component } from "react";
import P5Wrapper from "react-p5-wrapper";
import { Link } from "react-router-dom";

function sketch(p) {
  let font;
  const textTyped = "H O L M";
  const fontSize =
    Math.max(document.documentElement.clientWidth, window.innerWidth || 0) / 6;
  const pointDensity = 9;
  let textImg;

  p.preload = function() {
    font = p.loadFont("./CircularStd-Black.otf");
  };

  p.setup = function() {
    p.createCanvas(p.displayWidth, (p.displayHeight / 3) * 2);
    p.frameRate(10);
    p.rectMode(p.CENTER);
    // p.pixelDensity(p.displayDensity());
    p.setupText();

    p.background("#f6f6f6");
    // const radians = p.random(0.6, 1) * 3.5;
    const radians = p.random(0.7, 1) * 2.8;
    // console.log(radians);
    for (let x = 0; x < textImg.width; x += pointDensity) {
      for (let y = 0; y < textImg.height; y += pointDensity) {
        const index = (x + y * textImg.width) * 4;
        const r = textImg.pixels[index];

        if (r < 128) {
          p.strokeWeight(1);
          var lengthFac = p.random(0.1, 0.21);
          //console.log(lengthFac);
          p.fill(0);
          p.push();
          p.translate(x, y);
          p.rotate(radians);
          p.line(0, 0, fontSize * lengthFac, 0);
          p.pop();
        }
      }
    }
  };

  p.setupText = function() {
    textImg = p.createGraphics(p.width, p.height);
    textImg.pixelDensity(1);
    textImg.background(255);
    textImg.textFont(font);
    textImg.textSize(fontSize);
    textImg.textAlign(p.CENTER, p.CENTER);
    textImg.text(textTyped, p.width / 1.95, p.height / 2.2);
    textImg.loadPixels();
  };

  p.draw = function() {};
}

class Home extends Component {
  componentWillMount() {}

  render() {
    return (
      <div className="canvas-wrapper">
        <P5Wrapper sketch={sketch} />
        <div id="home-button-row">
          <Link to="/about">
            <img src="/images/about.png" alt="about" />
            <span>About</span>
          </Link>
          <Link to="/products">
            <img src="/images/products.png" alt="products" />
            <span>Products</span>
          </Link>
          <Link to="/contact">
            <img src="/images/contact.png" alt="contact" />
            <span>Contact</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
