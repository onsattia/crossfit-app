import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Signup from "./containers/Singup/Signup";
import Login from "./containers/Login/Login";
import Logout from "./containers/Login/SignOut/SignOut";

import classes from './App.css';

class App extends Component {

  render() {
    return (
        <div className={classes.App}>
          <Layout>
             <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/signup" exact component={Signup} />
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
