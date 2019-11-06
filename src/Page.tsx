import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as path from "./axios/apiPath";
import * as page from "./page/Mrys";

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={page.Login} />
      <Route path={path.loginPage} component={page.Login} />
      <Route path={path.homePage} component={page.HomePage} />
    </Switch>
  </Router>
);
