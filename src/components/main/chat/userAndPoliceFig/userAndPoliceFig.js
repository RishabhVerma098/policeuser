import React from "react";
import "./userAndPoliceFig.scss";
function userAndPoliceFig() {
  return (
    <div className="userAndPoliceFig">
      <div className="userNameDateTime">
        <h4>Rahul Kulbe</h4>
        <p>24 Mon , 3:05 PM</p>
      </div>
      <div className="policeFig">
        {/* <img src={require("../../../../asset/policeman.png")} alt="svg"></img> */}
      </div>
    </div>
  );
}

export default userAndPoliceFig;
