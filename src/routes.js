import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import checkAuth from "./context/checkAuth";

import Home from "./components/Home";
import BotList from "./components/List/List";
import AddNewBot from "./components/AddNew/AddNew";
import LoginForm from "./components/auth/Login";

export const LoginIsland = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      checkAuth() ? (
        <Component {...props} />
      ) : (
        window.location.replace("#/login")
      )
    }
  />
);

const BaseRoute = () => (
  <HashRouter basename="/">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={LoginForm} />

      <LoginIsland exact path="/bots" component={BotList} />
      <LoginIsland exact path="/add-new-bot" component={AddNewBot} />

      <Route component={Home} />
    </Switch>
  </HashRouter>
);

export default BaseRoute;
