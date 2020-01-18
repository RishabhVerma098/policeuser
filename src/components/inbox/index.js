import React from "react";
import "./index.scss";
function Inbox() {
  return (
    <div className="inbox">
      <h1>Inbox</h1>
      <div className="inboxList">
        <div className="message">
          <div className="userImage"></div>
          <div className="text">
            <p className="title">
              Proident labore consequat id et commodo dolor. Eiusmod sunt
              exercitation minim reprehenderit ullamco ea mollit ullamco labore
            </p>
            <p className="timeStamp">34 min ago</p>
          </div>
        </div>
        <div className="message">
          <div className="userImage"></div>
          <div className="text">
            <p className="title">
              Proident labore consequat id et commodo dolor. Eiusmod sunt
              exercitation minim reprehenderit ullamco ea mollit ullamco labore
            </p>
            <p className="timeStamp">34 min ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inbox;
