import React from "react";
import "./userInputBar.scss";
function UserInputBar() {
  return (
    <div className="userInput">
      <div className="bar">
        <div className="microphone"></div>
        <div className="enterText">
          <input
            type="text"
            name="name"
            placeholder="write or tap on microphone"
            maxLength="50"
          />
        </div>
        <div className="go"></div>
      </div>
    </div>
  );
}
export default UserInputBar;
