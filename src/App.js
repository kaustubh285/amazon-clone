import React from "react";

import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className='app'>
        <Navbar />
        <Switch>
          <Route path='/checkout'>
            <Checkout />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
