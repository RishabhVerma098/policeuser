import React from "react";
import "./index.scss";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
function Inbox() {
  return (
    <div className="inbox">
      <h1>Inbox</h1>
      <SimpleBar className="inboxList">
        <div className="message">
          <div className="userImage">
            <img src={require("../../asset/police.png")} />
          </div>
          <div className="text">
            <p className="title">
              Proident labore consequat id et commodo dolor. Eiusmod sunt
              exercitation minim reprehenderit ullamco ea mollit ullamco labore
            </p>
            <p className="timeStamp">34 min ago</p>
          </div>
        </div>
        <div
          className="message"
          style={{ backgroundColor: "#7252f1", color: "white" }}
        >
          <div className="userImage">
            <img src={require("../../asset/person.jpeg")} />
          </div>
          <div className="text">
            <p className="title">
              Proident labore consequat id et commodo dolor. Eiusmod sunt
              exercitation minim reprehenderit ullamco ea mollit ullamco labore
            </p>
            <p className="timeStamp">34 min ago</p>
          </div>
        </div>
        <div className="message">
          <div className="userImage">
            <img src={require("../../asset/police.png")} />
          </div>
          <div className="text">
            <p className="title">
              Proident labore consequat id et commodo dolor. Eiusmod sunt
              exercitation minim reprehenderit ullamco ea mollit ullamco labore
            </p>
            <p className="timeStamp">34 min ago</p>
          </div>
        </div>
        <div
          className="message"
          style={{ backgroundColor: "#7252f1", color: "white" }}
        >
          <div className="userImage">
            <img src={require("../../asset/person.jpeg")} />
          </div>
          <div className="text">
            <p className="title">
              Proident labore consequat id et commodo dolor. Eiusmod sunt
              exercitation minim reprehenderit ullamco ea mollit ullamco labore
            </p>
            <p className="timeStamp">34 min ago</p>
          </div>
        </div>
        <div className="message">
          <div className="userImage">
            <img src={require("../../asset/police.png")} />
          </div>
          <div className="text">
            <p className="title">
              Proident labore consequat id et commodo dolor. Eiusmod sunt
              exercitation minim reprehenderit ullamco ea mollit ullamco labore
            </p>
            <p className="timeStamp">34 min ago</p>
          </div>
        </div>
        <div
          className="message"
          style={{ backgroundColor: "#7252f1", color: "white" }}
        >
          <div className="userImage">
            <img src={require("../../asset/person.jpeg")} />
          </div>
          <div className="text">
            <p className="title">
              Proident labore consequat id et commodo dolor. Eiusmod sunt
              exercitation minim reprehenderit ullamco ea mollit ullamco labore
            </p>
            <p className="timeStamp">34 min ago</p>
          </div>
        </div>
        <div className="message">
          <div className="userImage">
            <img src={require("../../asset/police.png")} />
          </div>
          <div className="text">
            <p className="title">
              Proident labore consequat id et commodo dolor. Eiusmod sunt
              exercitation minim reprehenderit ullamco ea mollit ullamco labore
            </p>
            <p className="timeStamp">34 min ago</p>
          </div>
        </div>
        <div
          className="message"
          style={{ backgroundColor: "#7252f1", color: "white" }}
        >
          <div className="userImage">
            <img src={require("../../asset/person.jpeg")} />
          </div>
          <div className="text">
            <p className="title">
              Proident labore consequat id et commodo dolor. Eiusmod sunt
              exercitation minim reprehenderit ullamco ea mollit ullamco labore
            </p>
            <p className="timeStamp">34 min ago</p>
          </div>
        </div>
      </SimpleBar>
    </div>
  );
}

export default Inbox;
