import React, { Component } from "react";
import "./index.scss";

class LeftSide extends Component {
  state = {
    feature: ["feature1", "feature2", "feature3"]
  };

  render() {
    return (
      <div className="leftside">
        <img src={require("../../../asset/unDraw.svg")} alt="image" />
        <div className="text">
          <h1>{this.state.feature[0]}</h1>
        </div>
      </div>
    );
  }
}

export default LeftSide;
