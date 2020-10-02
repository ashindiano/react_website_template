import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";

import App from "./app";
import { history, store } from "./_helpers";
import LoginContainer from "./_views/login/container";
import AuthService from "./_services/authorize.service";

render(
  <Provider store={store}>
    <Router history={history}>
      {AuthService.getToken() !== null ? <LoginContainer /> : <App />}
    </Router>
  </Provider>,
  document.getElementById("root")
);
