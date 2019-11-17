import React from "react";
import { Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthUserContext from "../../../AuthUserContext";
import "./NavigationItems.css";

const navigationItems = ({ authUser }) => (
  <AuthUserContext.Consumer>
    {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
  </AuthUserContext.Consumer>
);

const NavigationAuth = () => (
  <Nav pullRight>
    <NavItem eventKey={2} componentClass={Link} href="/members" to="/members">
      MEMBERS
    </NavItem>
    <NavItem eventKey={3} componentClass={Link} href="/logout" to="/logout">
      LOGOUT
    </NavItem>
  </Nav>
);

const NavigationNonAuth = () => (
  <Nav pullRight>
    <NavItem eventKey={4} componentClass={Link} href="/login" to="/login">
      LOGIN
    </NavItem>
    <NavItem eventKey={4} componentClass={Link} href="/signup" to="/signup">
      SIGN UP
    </NavItem>
  </Nav>
);

export default navigationItems;
