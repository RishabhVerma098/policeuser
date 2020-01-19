import React from "react";
import LeftSide from "./leftside";
import "./index.scss";
import { connect } from "react-redux";
import { userPostFetch } from "../../store/actions";
import Login from "./loginScreen/login-index";
import SignUp from "./signupScreen/signUp-index";

class UserAuth extends React.Component {
  render() {
    return (
      <div className="app">
        <LeftSide />
        {/* <Login /> */}
        <SignUp />
      </div>
    );
  }
}

export default connect(null, { userPostFetch })(UserAuth);
