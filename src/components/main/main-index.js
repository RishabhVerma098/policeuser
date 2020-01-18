import React from "react";
import { slider } from "../../store/actions";
import { connect } from "react-redux";
import Chat from "./chat/chat-index";
import Summary from "./summary/summary-index";
import StepScreen from "../AfterDone";
import AllFir from "../seeMyFieldFIR";
import Settings from "../settings";
import Inbox from "../inbox";
import { Switch, Route } from "react-router-dom";

import "./main-index.scss";
function Main(props) {
  return (
    <section
      style={props.slide ? { width: "95%" } : { width: "80%" }}
      className="main"
    >
      <Switch>
        <Route path="/" exact>
          <Chat />
          <Summary />
        </Route>
        <Route path="/Steps">
          <StepScreen />
        </Route>
        <Route path="/AllFIR">
          <AllFir />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/inbox">
          <Inbox />
        </Route>
      </Switch>
    </section>
  );
}
const mapStateToProps = state => {
  return { slide: state.slider };
};

export default connect(mapStateToProps, { slider })(Main);
