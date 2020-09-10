import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import './Login.css';

export class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {password:"", email:""};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }

    handlePassword(passwd) {
        this.setState({password : passwd.target.value});
    }

    handleEmail(mail) {
        this.setState({email : mail.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("ENTRE AL METODO");
        console.log(localStorage.getItem("email"));
        console.log(this.state.email);
        console.log(localStorage.getItem("password"));
        console.log(this.state.password);
        if(localStorage.getItem("email") === this.state.email && localStorage.getItem("password") === this.state.password) {
            console.log("AQUI ESTOY");
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("tasksLists", JSON.stringify([]));
            const user = {
                name : localStorage.getItem("name"),
                email : localStorage.getItem("email"),
                password : localStorage.getItem("password")
            }
            localStorage.setItem("user", JSON.stringify(user));
        } else {
            alert("El usuario no esta registrado.");
        }
        window.location.href="/";
    }

    render() {

        return(
            <React.Fragment>
                <CssBaseline />

                <main className="layout" onSubmit={this.handleSubmit}>
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <LockIcon />
                        </Avatar>
                        <Typography variant="h2">Task Planner</Typography>
                        <form className="form">
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input 
                                id="email" 
                                name="email" 
                                autoComplete="email" 
                                value={this.state.email} 
                                onChange={this.handleEmail} 
                                autoFocus />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value = {this.state.password}
                                    onChange = {this.handlePassword}
                                    autoFocus
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
                            >
                                Login
                            </Button>
                            <br />
                            <br />
                            <div>
                                <Grid>
                                    <Link href = "#" variant = "body2">
                                        Create Account
                                    </Link>
                                </Grid>
                            </div>
                        </form>
                    </Paper>
                </main>

            </React.Fragment>
        );

    }

}