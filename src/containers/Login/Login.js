import React, { Component } from 'react';
import { Grid, Form, FormGroup, ControlLabel, FormControl, Button, Col, Alert} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { SignUpLink } from '../Singup/Signup';
import { auth } from '../../firebase';
import './Login.css';

const SignInPage = ({ history }) =>
  <Grid>
    <h2>Sign In</h2>
    <Login history={history} />
    <Col smOffset={2} sm={10}>
      <SignUpLink />
    </Col>
  </Grid>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        history.push("/home");
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
        <Form horizontal onSubmit={this.onSubmit}>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email
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
                value={password}
                onChange={event => this.setState(byPropKey('password', event.target.value))}
                type="password"
                placeholder="Password" 
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button disabled={isInvalid} type="submit">Sign In</Button>
            </Col>
          </FormGroup>
            { error &&  <Alert bsStyle="danger"><p>{error.message}</p></Alert> }
        </Form>
    );
  }
}

export default withRouter(SignInPage);

export {
  Login,
};