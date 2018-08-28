import React, { Component } from "react";
import Dashboard from "./Dashboard";
import fire from "../config/Fire";

class Login extends Component {
  state = {
    email: "",
    password: ""
    // loggedIn: false,
    // errors: {}
  };

  onSubmit = e => {
    const { email, password } = this.state;
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(e => {})
      .catch(error => {
        console.log(error);
      });
    this.props.history.push("/dashboard");
  };

  // onSubmit = e => {
  //   e.preventDefault();
  //   const { email, password, loggedIn } = this.state;
  //   if (email === "" || password === "") {
  //     return alert("Please enter the following fields");
  //   }

  //   this.setState({ loggedIn: true }, async () => {});
  //   this.props.history.push({
  //     pathname: "./dashboard",
  //     state: { newUser: this.state.email }
  //   });
  //   // loggedIn ? <Dashboard newUser={this.newUser} /> : null;
  //   // console.log(this.state);
  // };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <div className="card mb-3">
          <div className="card-header">Log In</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control form-control-lg"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control form-control-lg"
                  placeholder="Enter Your Password"
                  value={password}
                  onChange={this.onChange}
                />
              </div>
              <input
                type="submit"
                value="Log In"
                className="btn btn-dark btn-block"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
