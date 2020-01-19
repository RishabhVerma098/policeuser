import React, { Component } from "react";
import "./chatScreen.scss";
import { summaryData } from "../../../../store/actions";
import { connect } from "react-redux";

class ChatScreen extends Component {
  state = {
    Data: [
      {
        title: "DateAndTime",
        description: "2:30pm today"
      },
      {
        title: "Location",
        description: "boroda colony"
      },
      {
        title: "Intent",
        description: "murder"
      }
    ]
  };

  render() {
    return (
      <div className="chatScreen">
        <div className="police-message message">
          <div
            className="avatar"
            onClick={() => this.props.summaryData(this.state.Data)}
          ></div>
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
        <div className="police-message message">
          <div
            className="avatar"
            onClick={() => this.props.summaryData(this.state.Data)}
          ></div>
          <div className="text">
            loremCillum velit consectetur eu qui ex incididunt ea ex esse in.
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { summaryData })(ChatScreen);
