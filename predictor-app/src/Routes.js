import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Users from "./components/users/Users";

const Routes = () => {
    console.log('routers')
  return (
    <Switch>
      <Route path="/premier-league" />
      <Route path="/users"  component={Users}/>
      <Route path="/" />
    </Switch>
  );
};
export default withRouter(Routes);
