import React from "react";
import "./userInputBar.scss";

class UserInputBar extends React.Component {
  state = {
    text: "Write or tap on microphone"
  };

  render() {
    return (
      <div className="userInput">
        <div className="bar">
          <div className="microphone">
            <img src={require("../../../../asset/voice-recorder.svg")}></img>
          </div>
          <div className="enterText">
            <input
              type="text"
              name="name"
              placeholder={this.state.text}
              maxLength="50"
            />
          </div>
          <div className="go">
            <img src={require("../../../../asset/multimedia.png")}></img>
          </div>
        </div>
      </div>
    );
  }
}

export default UserInputBar;
