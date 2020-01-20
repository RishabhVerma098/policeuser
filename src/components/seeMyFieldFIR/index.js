import React from "react";
import "./index.scss";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import { connect } from "react-redux";
import { allFirsPass } from "../../store/actions";

function AllFirs(props) {
  return (
    <div className="allFir">
      <h2>My Firs</h2>
      <SimpleBar className="listOfFir">
        {props.allFir.map(i => (
          <div className="fir">
            <div className="firImage"></div>
            <div className="firData">
              <h4>{i.title}</h4>
              <p className="timeStamp">created At: {i.timeStamp}</p>
              <p className="description">{i.description}</p>
            </div>
          </div>
        ))}
      </SimpleBar>
    </div>
  );
}

const mapStateToProps = state => {
  const newState = {
    allFir: state.allFirPassReducer
  };
  return newState;
};
export default connect(mapStateToProps, { allFirsPass })(AllFirs);
