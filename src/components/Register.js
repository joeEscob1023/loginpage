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
    if (firstName === "") {
      alert("Please Enter Your First Name");
    }

    if (lastName === "") {
      alert("Please Enter Your Last Name");
    }

    if (email === "") {
      alert("Please Enter Your Email");
    }

    if (password === "") {
      alert("Please Enter Your Email");
    }

    this.setState({ loggedIn: true }, async () => {});
    this.props.history.push({
      pathname: "./dashboard",
      state: { newUser: this.state.firstName }
    });
    // loggedIn ? <Dashboard newUser={this.newUser} /> : null;
    // console.log(this.state);
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
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  className="form-control form-control-lg"
                  placeholder="Enter Your First Name"
                  value={firstName}
                  onChange={this.onChange}
                />
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    className="form-control form-control-lg"
                    placeholder="Enter Your Last Name"
                    value={lastName}
                    onChange={this.onChange}
                  />
                </div>
              </div>
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
