import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { auth } from '../../firebase';

class Logout extends Component {
  

componentWillMount () {
  auth.doSignOut();
}

render () {
  return(
      <Redirect to="/signin"/>
  )

}

}

export default Logout;
