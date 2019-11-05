import ReactDOM from "react-dom";
import React from "react";
import { HashRouter as Router } from "react-router-dom";
import App from "./App";
const MyApp = props => {
  return (
    <>
      <Router>
        <App />
      </Router>
    </>
  );
};
ReactDOM.render(<MyApp />, document.getElementById("app"));
export default MyApp;
