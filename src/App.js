import React from "react";
import Portfolio from "./components/Portfolio.jsx"
import { BrowserRouter as Router, Route } from "react-router-dom"


const App = () => {
  return (
    <Router>
    <Route
      exact path="/"
      component={Portfolio}
    />
    </Router>
  );
}

export default App;
