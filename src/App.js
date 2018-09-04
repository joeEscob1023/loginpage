import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import "./App.css";

//Firebase
import { firebase } from "./firebase";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header branding="Login.com" />
          <div className="container">
            <Switch>
              <Route exact path="/Dashboard" component={Dashboard} />
              <Route exact path="/" component={Login} />
              )}
              <Route exact path="/Register" component={Register} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
