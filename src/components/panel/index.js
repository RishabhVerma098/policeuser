import React from "react";
import { slider } from "../../store/actions";
import { connect } from "react-redux";
import "./index.scss";
function Panel(props) {
  return (
    <section
      style={props.slide ? { width: "5%" } : { width: "20%" }}
      className="panel"
    >
      <div className="user">
        <div className="userPhotoName">
          <div className="image"></div>
          <text>Rahul</text>
        </div>
        <div className="icon" onClick={() => props.slider()}></div>
      </div>
      <div className="panelList">
        <h5>File My FIR</h5>
        <h5>See all Filled FIR</h5>
        <h5>Settings</h5>
        <h5>Inbox</h5>
      </div>
    </section>
  );
}

const mapStateToProps = state => {
  return { slide: state.slider };
};

export default connect(mapStateToProps, { slider })(Panel);

// <h3>panel side</h3>
//       <button onClick={() => props.slider()}>Go</button>
