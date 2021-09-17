import React, {useState} from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Customize from "./Components/Customize";
import Display from "./Components/Display";
export default function App() {
  const [stateMange, setStateManage] = useState({});
  const liftUpState = (data) => {
    setStateManage(data);
  }

  console.log(stateMange)

  return (
    <Router>
      <Switch>
        <Route path="/">
          <Customize onLift={liftUpState}/>
        </Route>

        <Route path="/display">
          <Display/>
        </Route>
      </Switch>
    </Router>
  );
}

