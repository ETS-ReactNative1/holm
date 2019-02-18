import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "../Context";
import Home from "./Home";
import Products from "./Products";
import Product from "./Product";
import NotFound from "./NotFound";
import About from "./About";
import Contact from "./Contact";

const Router = () => (
  <Provider>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route path="/product/:productId" component={Product} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default Router;
