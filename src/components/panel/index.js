import React from "react";
import { slider } from "../../store/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./index.scss";
function Panel(props) {
  return (
    <section
      style={props.slide ? { width: "5%" } : { width: "20%" }}
      className="panel"
    >
      <div className="user">
        <div className="userPhotoName">
          {props.slide ? null : (
            <React.Fragment>
              <div className="image"></div>
              <p>Rahul</p>
            </React.Fragment>
          )}
        </div>
        <div className="icon" onClick={() => props.slider()}>
          <img src={require("../../asset/icons/close.svg")} alt="Close" />
        </div>
      </div>
      <div
        className="panelList"
        style={props.slide ? { marginLeft: "1rem" } : null}
      >
        <Link to="/app">
          <div className="fileFIR fir">
            <img src={require("../../asset/icons/FIR.svg")} alt="FIR" />
            {props.slide ? null : <h5>File My FIR</h5>}
          </div>
        </Link>

        <Link to="/app/allfir">
          <div className="fileFIR fir">
            <img src={require("../../asset/icons/seeFIR.svg")} alt="FIR" />
            {props.slide ? null : <h5>See My Filed FIR</h5>}
          </div>
        </Link>
        <Link to="/app/settings">
          <div className="fileFIR fir">
            <img src={require("../../asset/icons/settings.svg")} alt="FIR" />
            {props.slide ? null : <h5>Settings</h5>}
          </div>
        </Link>
        <Link to="/app/inbox">
          <div className="fileFIR fir">
            <img src={require("../../asset/icons/inbox.svg")} alt="FIR" />
            {props.slide ? null : <h5>Inbox</h5>}
          </div>
        </Link>
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
