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
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <h1>Sign Up For An Account</h1>

          <label>Username</label>
          <input
            name="name"
            placeholder="Username"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <br />

          <input
            type="email"
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
          />

          <input
            type="number"
            name="age"
            placeholder="age"
            value={this.state.age}
            onChange={this.handleChange}
          />

          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default connect(null, { userPostFetch })(SignUp);
