import React from "react";
import "./userInputBar.scss";

class UserInputBar extends React.Component {
  state = {
    text: "write or tap on microphone"
  };

  render() {
    return (
      <div className="userInput">
        <div className="bar">
          <div className="microphone"></div>
          <div className="enterText">
            <input
              type="text"
              name="name"
              placeholder={this.state.text}
              maxLength="50"
            />
          </div>
          <div className="go"></div>
        </div>
      </div>
    );
  }
}

export default UserInputBar;
