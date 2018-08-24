import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Home/Home';
import Login  from './Login';
import Logout from './Logout';
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

function Navbar(props) {
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

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
