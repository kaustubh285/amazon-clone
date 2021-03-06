import React, { useEffect } from "react";

import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("User is >>>>", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Navbar />
            <Checkout />
          </Route>
          <Route path='/'>
            <Navbar />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
