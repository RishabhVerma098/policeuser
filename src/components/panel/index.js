import React from "react";
import { slider, handlePanelList } from "../../store/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./index.scss";

class Panel extends React.Component {
  state = {
    active: [true, false, false, false]
  };

  handleColor = num => {
    const active = this.state.active;
    if (active[num]) {
      return null;
    } else {
      active[num] = true;
      for (let i = 0; i <= 3; i++) {
        if (i == num) {
          continue;
        }
        active[i] = false;
      }
    }
    this.setState({
      active: active
    });
  };

  render() {
    return (
      <section
        style={this.props.slide ? { width: "5%" } : { width: "20%" }}
        className="panel"
      >
        <div className="user">
          <div className="userPhotoName">
            {this.props.slide ? null : (
              <React.Fragment>
                <div className="image"></div>
                <p>Rahul kulbe</p>
              </React.Fragment>
            )}
          </div>
          <div className="icon" onClick={() => this.props.slider()}>
            <img src={require("../../asset/icons/close.svg")} alt="Close" />
          </div>
        </div>
        <div
          className="panelList"
          style={this.props.slide ? { marginLeft: "1rem" } : null}
        >
          <Link to="/app">
            <div className="fileFIR fir" onClick={() => this.handleColor(0)}>
              <img src={require("../../asset/icons/FIR.svg")} alt="FIR" />
              {this.props.slide ? null : (
                <h5 style={this.state.active[0] ? { color: "#EC6BB0" } : null}>
                  File My FIR
                </h5>
              )}
            </div>
          </Link>

          <Link to="/app/allfir">
            <div className="fileFIR fir" onClick={() => this.handleColor(1)}>
              <img src={require("../../asset/icons/seeFIR.svg")} alt="FIR" />
              {this.props.slide ? null : (
                <h5 style={this.state.active[1] ? { color: "#EC6BB0" } : null}>
                  See My Filed FIR
                </h5>
              )}
            </div>
          </Link>
          <Link to="/app/inbox">
            <div className="fileFIR fir" onClick={() => this.handleColor(2)}>
              <img src={require("../../asset/icons/inbox.svg")} alt="FIR" />
              {this.props.slide ? null : (
                <h5 style={this.state.active[2] ? { color: "#EC6BB0" } : null}>
                  Inbox
                </h5>
              )}
            </div>
          </Link>
          <Link to="/app/settings">
            <div className="fileFIR fir" onClick={() => this.handleColor(3)}>
              <img src={require("../../asset/icons/settings.svg")} alt="FIR" />
              {this.props.slide ? null : (
                <h5 style={this.state.active[3] ? { color: "#EC6BB0" } : null}>
                  Settings
                </h5>
              )}
            </div>
          </Link>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    slide: state.slider,
    handlePanelListReducer: state.handlePanelListReducer.active
  };
};

export default connect(mapStateToProps, { slider, handlePanelList })(Panel);
