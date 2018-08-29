import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import AuthUserContext from '../../../AuthUserContext';
// import './NavigationItems.css';

const navigationItems = ({ authUser }) =>
    <AuthUserContext.Consumer>
        {authUser => authUser
        ? <NavigationAuth />
        : <NavigationNonAuth />
        }
    </AuthUserContext.Consumer>

const NavigationAuth = () =>
    <Nav pullRight>
        <LinkContainer to="/">
            <NavItem eventKey={3}>Home</NavItem>
        </LinkContainer>
        <LinkContainer to="/members">
            <NavItem eventKey={4}>Members</NavItem>
        </LinkContainer>
        <LinkContainer to="/logout">
            <NavItem eventKey={5}>Logout</NavItem>
        </LinkContainer> 
    </Nav>

const NavigationNonAuth = () =>
    <Nav pullRight>
        <LinkContainer to="/signin">
            <NavItem eventKey={1}>Sign In</NavItem>
        </LinkContainer> 
        <LinkContainer to="/signup">
            <NavItem eventKey={2}>Sing Up</NavItem>
        </LinkContainer>   
    </Nav>

export default navigationItems;