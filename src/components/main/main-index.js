import React from "react";
import { slider } from "../../store/actions";
import { connect } from "react-redux";
import Chat from "./chat/chat-index";
import Summary from "./summary/summary-index";
import StepScreen from "../AfterDone";
import "./main-index.scss";
function Main(props) {
  return (
    <section
      style={props.slide ? { width: "95%" } : { width: "80%" }}
      className="main"
    >
      {/* <Chat />
      <Summary /> */}
      <StepScreen />
    </section>
  );
}
const mapStateToProps = state => {
  return { slide: state.slider };
};

export default connect(mapStateToProps, { slider })(Main);
