import React from "react";
import { Link } from "react-router-dom";
import "./summary-index.scss";
import { connect } from "react-redux";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
function Summary(props) {
  console.log(props.data);
  return (
    <div className="summary">
      <h3>Summary</h3>
      <SimpleBar className="data">
        {props.data ? (
          props.data.map(i => (
            <div className="card" key={i.title}>
              <h5>{i.title}</h5>
              <p>{i.description}</p>
            </div>
          ))
        ) : (
          <div className="no-data">
            <p>
              No Data is collected as for now , intract with chatBoy to do so ..
            </p>
          </div>
        )}
      </SimpleBar>
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
