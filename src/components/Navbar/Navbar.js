import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavigationItems from './NavigationItems/NavigationItems';
import './Navbar.css'

const navigationbar = (props) => (
    <Navbar inverse collapseOnSelect>
        <NavigationItems authUser={props.authUser}/>
        <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/home" to="/home">
              Home
            </NavItem>
        </Nav>
    </Navbar>
)

export default navigationbar;