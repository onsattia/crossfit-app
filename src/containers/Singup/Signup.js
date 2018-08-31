import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Grid, Form, FormGroup, ControlLabel, FormControl, Button, Col, Alert} from 'react-bootstrap';
import { auth, db } from '../../firebase';

const SignUpPage = ({ history }) =>
  <Grid>
    <h2>Sign Up</h2>
    <SignUpForm history={ history }/>
  </Grid>

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value

});

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

onSubmit = (event) => {
    const {
        username,
        email,
        passwordOne,
      } = this.state;

      const {
        history,
      } = this.props;
  
      auth.doCreateUserWithEmailAndPassword(email, passwordOne)
        .then(authUser => {
          // Create a user in your own accessible Firebase Database too
          db.doCreateUser(authUser.user.uid, username, email)
          .then(() => {
            this.setState({ ...INITIAL_STATE });
            history.push("/home");
          })
          .catch(error => {
            this.setState(byPropKey('error', error));
          });
        })
        .catch(error => {
          this.setState(byPropKey('error', error));
        });
  
      event.preventDefault();
}

render() {
    const {
        username,
        email,
        passwordOne,
        passwordTwo,
        error,
    } = this.state;

    const isInvalid =
    passwordOne !== passwordTwo ||
    passwordOne === '' ||
    email === '' ||
    username === '';
  
    return (
      <Form horizontal onSubmit={this.onSubmit}>
          <FormGroup controlId="formHorizontalFullName">
            <Col componentClass={ControlLabel} sm={2}>
              Full Name
            </Col>
            <Col sm={10}>
              <FormControl  
                value={username}
                onChange={event => this.setState(byPropKey('username', event.target.value))}
                type="text"
                placeholder="Full Name"
              />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email Address
            </Col>
            <Col sm={10}>
              <FormControl  
                value={email}
                onChange={event => this.setState(byPropKey('email', event.target.value))}
                type="text"
                placeholder="Email Address"
              />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={10}>
              <FormControl 
                value={passwordOne}
                onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                type="password"
                placeholder="Password" 
              />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalConfirmPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Confirm Password
            </Col>
            <Col sm={10}>
              <FormControl 
                value={passwordTwo}
                onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                type="password"
                placeholder="Confirm Password" 
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button disabled={isInvalid} type="submit">Sign Up</Button>
            </Col>
          </FormGroup>
            { error &&  <Alert bsStyle="danger"><p>{error.message}</p></Alert> }
      </Form>
      
    );
  }
}

export default withRouter(SignUpPage);

export {
  SignUpForm
};