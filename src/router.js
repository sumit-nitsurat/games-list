import React, { ReactElement, Suspense, lazy, useContext, ComponentType } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import { Store } from "./store";

import Login from "./login";
import GamesView from "./gamesView";

// const Login = lazy(() => import("./login"));
// const GamesView = lazy(() => import("./gamesView"));

const ValidatedRoute = ({ component: Component, ...rest }) => {
  const { state } = useContext(Store);
  return <Route {...rest} render={props => (state.isLoggedIn ? <Component {...props} /> : <Redirect to="/" />)} />;
};

export const Routes = () => (
  <Router>
    {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/games" component={GamesView} />
      </Switch>
    {/* </Suspense> */}
  </Router>
);