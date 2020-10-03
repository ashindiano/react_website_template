import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Route, Router, Switch } from "react-router-dom";

import PrivateRoute from "./_helpers/private_route";
import App from "./app";
import LoginContainer from "./_views/login/container";
import { history, store } from "./_helpers";

render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/login" component={LoginContainer} />
        <PrivateRoute path="/" component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
