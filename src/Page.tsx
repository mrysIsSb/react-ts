import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import LoginPage from "./page/Login";

export default () => (
    <Router>
        <Switch>
            <Route path='/' component={LoginPage} />
        </Switch>
    </Router>
);

