import React, { Component } from "react";
import Dashboard from "./Dashboard";

class Login extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    loggedIn: false,
    errors: {}
  };

  onSubmit = e => {
    e.preventDefault();
    const { firstName, lastName, email, password } = this.state;
    // if (firstName === "") {
    //   alert("Please Enter Your First Name");
    // }

    // if (lastName === "") {
    //   alert("Please Enter Your Last Name");
    // }

    if (email === "") {
      alert("Please Enter Your Email");
    }

    if (password === "") {
      alert("Please Enter Your Email");
    }
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { firstName, lastName, email, password } = this.state;
    return (
      <div>
        <div className="card mb-3">
          <div className="card-header">Register</div>
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
                value="Register"
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
