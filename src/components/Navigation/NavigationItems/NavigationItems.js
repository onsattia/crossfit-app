import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItems.css';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/logout">Logout</NavLink></li>
    </ul>
);

export default navigationItems;