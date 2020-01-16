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
      <h3>panel side</h3>
      <button onClick={() => props.slider()}>Go</button>
    </section>
  );
}

const mapStateToProps = state => {
  return { slide: state.slider };
};

export default connect(mapStateToProps, { slider })(Panel);
