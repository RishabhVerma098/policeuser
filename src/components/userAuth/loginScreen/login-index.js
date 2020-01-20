import React, { Component } from "react";
import { connect } from "react-redux";
import { userLoginFetch } from "../../../store/actions";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.userLoginFetch(this.state);
  };

  render() {
    return (
      <div className="formholder">
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <h1>Login</h1>

            <label>Username</label>
            <div className="username style">
              <label>Username</label>
              <input
                name="name"
                placeholder="Username"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <br />
            </div>
            <div className="password style">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <br />
            </div>
            <input type="submit" />
          </form>
          <div className="login">Sign In?</div>
        </div>
      </div>
    );
  }
}

export default connect(null, { userLoginFetch })(Login);
