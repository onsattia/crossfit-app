import React from "react";
import { Navbar, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavigationItems from "./NavigationItems/NavigationItems";
import "./Navbar.css";

const navigationbar = props => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Toggle />
      <Navbar.Brand>
        <NavItem eventKey={1} componentClass={Link} href="/home" to="/home">
          CrossFit
        </NavItem>
      </Navbar.Brand>
    </Navbar.Header>
    <Navbar.Collapse>
      <NavigationItems authUser={props.authUser} />
    </Navbar.Collapse>
  </Navbar>
);

export default navigationbar;
