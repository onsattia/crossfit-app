import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Login extends Component {
constructor(props){
  super(props);
  this.state={
    username:'',
    password:'',
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
        <div>
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
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="Toggle password visibility"
                            onClick={this.handleClickShowPassword}
                            onMouseDown={this.handleMouseDownPassword}
                        >
                        {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    }
                />
            </FormControl>
            <br />
            <br/>
            <Button variant="contained"  color="primary" onClick={(event) => this.handleClick(event)}>
                Login
            </Button>
            <br />


        </div>
    );
  }
}

export default Login;