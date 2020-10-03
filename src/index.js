import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Route, Router, Switch } from "react-router-dom";

import PrivateRoute from "./_helpers/private_route";
import App from "./app";
import Login from "./_views/login/login_page";
import { history, store } from "./_helpers";

render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/" component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
