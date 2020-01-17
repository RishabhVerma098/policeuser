import React from "react";
import "./chatScreen.scss";
function ChatScreen() {
  return (
    <div className="chatScreen">
      <div className="police-message message">
        <div className="avatar"></div>
        <div className="text">
          loremCillum velit consectetur eu qui ex incididunt ea ex esse in.
        </div>
      </div>
      <div className="user-message message">
        <div className="avatar"></div>
        <div className="text">
          loremCillum velit consectetur eu qui ex incididunt ea ex esse in. Ut
          elit quis irure non pariatur.
        </div>
      </div>
    </div>
  );
}

export default ChatScreen;
