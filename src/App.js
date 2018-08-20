import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header branding="Login.com" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/Dashboard" component={Dashboard} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;