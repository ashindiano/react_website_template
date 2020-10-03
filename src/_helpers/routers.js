import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import HomePageContainer from "../_views/home/container";
import EnhancedTableHead from "../_views/test/sample_table";
import Child1Container from "../_views/subheader1/child1/container";
import Child2Container from "../_views/subheader1/child2/container";
import Child3Container from "../_views/subheader1/child3/container";

export function bodyRoutes() {
  return (
    <Switch>
      <Route path={"/home"} component={HomePageContainer} />
      <Route path={"/subheader1/child1"} component={Child1Container} />
      <Route path={"/subheader1/child2"} component={Child2Container} />
      <Route path={"/subheader1/child3"} component={Child3Container} />
      <Route path={"/subheader2/child1"} component={EnhancedTableHead} />
      <Redirect from="/" to={"/home"} />
    </Switch>
  );
}
