import React from "react";
import Layout from "./components/Layout/Layout";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Members from "./components/Members/Members";
import Signup from "./containers/Singup/Signup";
import Login from "./containers/Login/Login";
import Logout from "./containers/SignOut/SignOut";
import withAuthentication from "./hoc//withAuthentication";

import "./App.css";

const app = () => (
  <Layout>
    <Switch>
      <Route path="/home" exact component={Home} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/login" exact component={Login} />
      <Route path="/members" exact component={Members} />
      <Route path="/logout" exact component={Logout} />
    </Switch>
  </Layout>
);

export default withAuthentication(app);
