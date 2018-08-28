import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import "./App.css";

//Firebase
import fire from "./config/Fire";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    user: {}
  };

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Header branding="Login.com" />
          <div className="container">
            <Switch>
              {this.state.user ? (
                <Route exact path="/Dashboard" component={Dashboard} />
              ) : (
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
