import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Users from "./components/Users/Users";
import Teams from "./components/Teams/Teams";

const Routes = () => {
  console.log("routers");
  return (
    <Switch>
      <Route path="/premier-league" />
      <Route path="/teams" component={Teams} />
      <Route path="/users" component={Users} />
      <Route path="/" />
    </Switch>
  );
};
export default withRouter(Routes);
