import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Route, Link, Switch } from 'react-router-dom';
import Home from '../container/Home/Home';
import Login  from '../container/Auth/Auth';
import Logout from '../container/Auth/Logout/Logout';
import Members  from './Members/Members';


const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const navbar = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root} color="primary">
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.flex}/>
          <Button color="inherit"><Link to="/">Home</Link></Button>
          <Button color="inherit"><Link to="/members">Members</Link></Button>
          <Button color="inherit"><Link to="/login">Login</Link></Button>
          <Button color="inherit"><Link to="/logout">Logout</Link></Button>
        </Toolbar>
      </AppBar>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/members" exact component={Members} />
        <Route path="/login" exact component={Login} />
        <Route path="/logout" exact component={Logout} />
        <Route render = {
          () => <h3>Not Found</h3>
        }/>
      </Switch>
    </div>
  );
}

navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(navbar);
