import React from "react";
import { Link } from "react-router-dom";
import "./summary-index.scss";
import { connect } from "react-redux";
function Summary(props) {
  console.log(props.data);
  return (
    <div className="summary">
      <h3>SummaryScreen</h3>
      <div className="data">
        {props.data
          ? props.data.map(i => (
              <div className="card" key={i.title}>
                <h5>{i.title}</h5>
                <p>{i.description}</p>
              </div>
            ))
          : null}
      </div>
      {props.data ? (
        <Link to="/app/steps">
          <button className="DONE">DONE</button>
        </Link>
      ) : (
        <Link to="/app/steps">
          <button disabled={true} className="DONE">
            DONE
          </button>
        </Link>
      )}
    </div>
  );
}
const mapStateToProps = state => {
  return { data: state.summaryData[0] };
};

export default connect(mapStateToProps)(Summary);
