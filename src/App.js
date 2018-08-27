import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import { Route, Switch } from 'react-router-dom';
import Home from './container/Home/Home';
import Login from "./container/Auth/Auth";
import Logout from "./container/Auth/Logout/Logout";

import classes from './App.css';

class App extends Component {

  render() {
    return (
        <div className={classes.App}>
          <Home />
          <Layout>
            <Switch>
              <Route path="/" exact Component={Home} />
              <Route path="/login" exact component={Login} />
              <Route path="/logout" exact component={Logout} />
            </Switch>
          </Layout>  
          <footer></footer>        
        </div>
    );
  }
}

export default App;
