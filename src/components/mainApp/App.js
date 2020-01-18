import React from "react";
import "./app.scss";
import Panel from "../panel";
import Main from "../main/main-index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <Panel />
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
