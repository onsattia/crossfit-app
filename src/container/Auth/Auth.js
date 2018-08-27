import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import './Auth.css';

class Auth extends Component {
constructor(props){
  super(props);
  this.state={
    username:'',
    password:'',
    isLoadin: false,
    redirectToReferrer: false
  }
}

handleChange = prop => event => {
    this.setState({ [prop]: event.target.value});
};

handleMouseDownPassword = event => {
    event.preventDefault();
};

handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
};

handleClick(event){
    var apiBaseUrl = "http://localhost:3000/";
    axios.get(apiBaseUrl+'users?username='+this.state.username+'&password='+this.state.password)
        .then ( (response) => {
            this.setState({redirectToReferrer: true});
            console.log(response)
            if(response.data.length === 1){
                console.log("Login successfull");
                localStorage.setItem("TOKEN","azerty123");
            }
            else{
                console.log("Username does not exists");
                alert("Username does not exist");
            }
        })
    .catch( (error) => {
        console.log(error);
    });
}

render() {

    if (this.state.redirectToReferrer) {
        return (<Redirect to={'/'}/>)
    }

    return (
        <div className="Auth">
            <h1>Login</h1>
            <TextField
                label="Username"
                onChange={this.handleChange('username')}
                margin="normal"
            />
            <br />
            <FormControl>
                <InputLabel htmlFor="adornment-password">Password</InputLabel>
                <Input
                    id="adornment-password"
                    type={this.state.showPassword ? 'text' : 'password'}
                    onChange={this.handleChange('password')}
                />
            </FormControl>
            <br />
            <br />
            <Button variant="contained"  color="primary" onClick={(event) => this.handleClick(event)}>
                Login
            </Button>
            <br /> 
        </div>
    );
  }
}

export default Auth;