import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as path from "./axios/apiPath";
import * as page from "./page/Mrys";
import  App  from "./App";

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={page.Login} />
      {/* <Route exact path="/" render={() => <Redirect to="/app/dashboard/index" push />} /> */}
      <Route path="/app" component={App} />
      {/* <Route path="/app/dashboard/index" component={page.HomePage} /> */}
      <Route path={path.loginPage} component={page.Login} />
      {/* <Route path={path.homePage} component={page.HomePage} /> */}
    </Switch>
  </Router>
);
