import React, { Component } from "react";
import fire from "../config/Fire";

class Dashboard extends Component {
  onLogout = e => {
    e.preventDefault();
    fire.auth().signOut();
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <h1>You are at the dash board</h1>
        <button onClick={this.onLogout}>Logout</button>
      </div>
    );
  }
}

export default Dashboard;

// props.location.state.newUser
