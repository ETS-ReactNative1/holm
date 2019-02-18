import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./css/App.css";
import Router from "./components/Router";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Router />, document.getElementById("root"));
registerServiceWorker();
