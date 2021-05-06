import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import publicsRoutes from "./publics";
import history from "../services/history";

export default function Routes() {
  const routes = [...publicsRoutes];

  return (
    <Router history={history}>
      <Switch>
        {routes.map((route) => (
          <Route exact path={route.path} {...route} />
        ))}
      </Switch>
    </Router>
  );
}
