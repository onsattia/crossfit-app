import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItems.css';

const navigationItems = ({ authUser }) =>
    <div>
        { authUser
            ? <NavigationAuth />
            : <NavigationNonAuth />
        }
    </div>

const NavigationAuth = () =>
    <ul className={classes.NavigationItems}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/logout">Logout</NavLink></li>
    </ul>

const NavigationNonAuth = () =>
    <ul className={classes.NavigationItems}>
        <li><NavLink to="/login">Login</NavLink></li>
    </ul>

export default navigationItems;