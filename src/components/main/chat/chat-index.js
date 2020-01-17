import React from "react";
import "./chat-index.scss";
import UserAndPoliceFig from "./userAndPoliceFig/userAndPoliceFig";
import ChatScreen from "./chatScreen/chatScreen";
import UserInputBar from "./userInputBar/userInputBar";
function Chat() {
  return (
    <div className="chat">
      <UserAndPoliceFig />
      <ChatScreen />
      <UserInputBar />
    </div>
  );
}
export default Chat;
