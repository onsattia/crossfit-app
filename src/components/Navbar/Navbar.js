import React from 'react'
import { Navbar } from 'react-bootstrap';
import NavigationItems from './NavigationItems/NavigationItems';
// import './Navbar.css'

const navigationbar = (props) => (
    <Navbar inverse collapseOnSelect>
      <Navbar.Collapse>
        <NavigationItems authUser={props.authUser}/>
      </Navbar.Collapse>
    </Navbar>
)

export default navigationbar;