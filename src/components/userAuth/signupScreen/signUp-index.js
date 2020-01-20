import React from "react";
import "./signUp-index.scss";
import { connect } from "react-redux";
import { userPostFetch } from "../../../store/actions";

class SignUp extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    age: ""
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.userPostFetch(this.state);
  };
  render() {
    return (
      <div className="formholder">
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <h1>Sign Up</h1>
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
            <div className="email style">
              <label>email</label>
              <input
                type="email"
                name="email"
                placeholder="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <div className="age style">
              <label>age</label>
              <input
                type="number"
                name="age"
                placeholder="age"
                value={this.state.age}
                onChange={this.handleChange}
              />
            </div>
            <div className="submit">
              <input type="submit" />
            </div>
          </form>
          <div className="login">Sign In?</div>
        </div>
      </div>
    );
  }
}

export default connect(null, { userPostFetch })(SignUp);
