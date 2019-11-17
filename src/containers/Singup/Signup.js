import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
  Grid,
  Row,
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
  Col,
  Alert
} from "react-bootstrap";
import { auth, db } from "../../firebase";

const SignUpPage = ({ history }) => (
  <Grid>
    <Row xs={4} sm={12} md={12}>
      <h2>Sign Up</h2>
    </Row>
    <Row>
      <SignUpForm history={history} />
    </Row>
  </Grid>
);

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;

    const { history } = this.props;

    auth
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your own accessible Firebase Database too
        db.doCreateUser(authUser.user.uid, username, email)
          .then(() => {
            this.setState({ ...INITIAL_STATE });
            history.push("/home");
          })
          .catch(error => {
            this.setState(byPropKey("error", error));
          });
      })
      .catch(error => {
        this.setState(byPropKey("error", error));
      });

    event.preventDefault();
  };

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";

    return (
      <Form horizontal onSubmit={this.onSubmit}>
        {error && (
          <Alert bsStyle="danger">
            <p>{error.message}</p>
          </Alert>
        )}
        <FormGroup controlId="formHorizontalFullName">
          <Col componentClass={ControlLabel} xs={12} sm={4}>
            Full Name
          </Col>
          <Col xs={6} sm={6}>
            <FormControl
              value={username}
              onChange={event =>
                this.setState(byPropKey("username", event.target.value))
              }
              type="text"
              placeholder="Full Name"
            />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} xs={12} sm={4}>
            Email Address
          </Col>
          <Col xs={6} sm={6}>
            <FormControl
              value={email}
              onChange={event =>
                this.setState(byPropKey("email", event.target.value))
              }
              type="text"
              placeholder="Email Address"
            />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} xs={12} sm={4}>
            Password
          </Col>
          <Col xs={6} sm={6}>
            <FormControl
              value={passwordOne}
              onChange={event =>
                this.setState(byPropKey("passwordOne", event.target.value))
              }
              type="password"
              placeholder="Password"
            />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalConfirmPassword">
          <Col componentClass={ControlLabel} xs={12} sm={4}>
            Confirm Password
          </Col>
          <Col xs={6} sm={6}>
            <FormControl
              value={passwordTwo}
              onChange={event =>
                this.setState(byPropKey("passwordTwo", event.target.value))
              }
              type="password"
              placeholder="Confirm Password"
            />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={4} sm={6} mdOffset={4}>
            <Button disabled={isInvalid} type="submit">
              Sign Up
            </Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default withRouter(SignUpPage);

export { SignUpForm };
