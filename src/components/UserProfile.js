import React from 'react';
import { InputLabel, TextField, Fab, Select, MenuItem } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import moment from "moment";

export default class UserProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            oldName: localStorage.getItem("name"),
            oldEmail: localStorage.getItem("email"),
            oldPassword: localStorage.getItem("password"),
            name: "",
            email: "",
            password: "",
            confirmPassword: ""}
        this.handleName = this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleConfirmPassword = this.handleConfirmPassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleName(newName) {
        this.setState({name : newName.target.value});
    }

    handleEmail(newEmail) {
        this.setState({email : newEmail.target.value});
    }

    handlePassword(newPasswd) {
        this.setState({password : newPasswd.target.value});
    }

    handleConfirmPassword(confirmPasswd) {
        this.setState({confirmPassword : confirmPasswd.target.value});
    }

    handleSubmit() {
        if(this.state.name != ""){
            localStorage.setItem("name", this.state.name);
        }
        if(this.state.email != ""){
            localStorage.setItem("email", this.state.email);
            localStorage.setItem("isLoggedIn", true);
        }
        if(this.state.password != "" || this.state.confirmPassword != ""){
            if(this.state.password !== this.state.confirmPassword) {
                this.throwAlert("The passwords don't match")
                return
            } else {
                localStorage.setItem("password", this.state.password);
            }
        }
    }

    render() {

        return (
            <div className="App">
                <form onSubmit={this.handleSubmit} className="todo-form">
                    <h1>User Profile</h1>

                    <TextField
                        label="full name"
                        id="name"
                        onChange={this.handleName}
                        value={this.state.name}>
                    </TextField>

                    <br />
                    <br />

                    <TextField
                        label="email"
                        id="email"
                        onChange={this.handleEmail}
                        value={this.state.email}>
                    </TextField>

                    <br />
                    <br />

                    <TextField
                        label="password"
                        id="password"
                        onChange={this.handlePassword}
                        value={this.state.password}>
                    </TextField>

                    <br />
                    <br />

                    <TextField
                        label="confirm password"
                        id="confirmPassword"
                        onChange={this.handleConfirmPassword}
                        value={this.state.confirmPassword}>
                    </TextField>

                    <br />
                    <br />
                    
                    <Fab type="submit" variant="round" color="secondary" className="fab">
                        <CheckIcon />
                    </Fab>
                </form>
                <br />
                <br />
            </div>
        );
    }
    
}
