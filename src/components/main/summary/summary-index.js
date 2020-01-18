import React from "react";
import "./summary-index.scss";
function Summary() {
  return (
    <div className="summary">
      <h3>SummaryScreen</h3>
      <div className="data">
        <div className="card">
          <h5>Title</h5>
          <p>Ea cillum anim ea officia ex cillum consectetur adipisicing do.</p>
        </div>
        <div className="card">
          <h5>Title</h5>
          <p>Ea cillum anim ea officia ex cillum consectetur adipisicing do.</p>
        </div>
        <div className="card">
          <h5>Title</h5>
          <p>Ea cillum anim ea officia ex cillum consectetur adipisicing do.</p>
        </div>
        <div className="card">
          <h5>Title</h5>
          <p>Ea cillum anim ea officia ex cillum consectetur adipisicing do.</p>
        </div>
      </div>
      <button>DONE</button>
    </div>
  );
}

export default Summary;
