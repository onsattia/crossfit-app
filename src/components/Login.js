import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';

class Login extends Component {
constructor(props){
  super(props);
  this.state={
    username:'',
    password:''
  }
}

handleClick(event){
    var apiBaseUrl = "http://localhost:3000/";
    axios.get(apiBaseUrl+'users?username='+this.state.username+'&password='+this.state.password)
        .then ( (response) => {
            console.log(response);
            if(response.data.length === 1){
                console.log("Login successfull");
                localStorage.setItem("Token","azerty123");
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
    return (
        <div>
            <MuiThemeProvider>
                <div>
                    <AppBar
                    title="Login"
                    />
                    <TextField
                        hintText="Enter your Username"
                        floatingLabelText="Username"
                        onChange = {(event,newValue) => this.setState({ username:newValue })}
                    />
                    <br/>
                    <TextField
                        type="password"
                        hintText="Enter your Password"
                        floatingLabelText="Password"
                        onChange = {(event,newValue) => this.setState({ password:newValue  })}
                    />
                    <br/>
                    <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
                </div>
            </MuiThemeProvider>
        </div>
    );
  }
}
const style = {
 margin: 15,
};
export default Login;