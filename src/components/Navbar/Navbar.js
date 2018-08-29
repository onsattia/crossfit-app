import React from 'react'
import { Navbar } from 'react-bootstrap';
import NavigationItems from './NavigationItems/NavigationItems';
// import './Navbar.css'

const navigationbar = (props) => (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          CrossFit
        </Navbar.Brand>
      </Navbar.Header>
        <NavigationItems authUser={props.authUser}/>
    </Navbar>
)

export default navigationbar;