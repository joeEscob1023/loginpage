import React, { Component } from "react";
import { firebase } from "../firebase";

class Dashboard extends Component {
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
