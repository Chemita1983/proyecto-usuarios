import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "../styles/Login.css";

class Login extends Component {
    constructor() {
        super();

        this.state = {
            message: '',
            username: '',
            password: '',
            isLogged: false
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {

        e.preventDefault();
        if (this.state.username === "admin" && this.state.password === "admin123") {
            this.setState({ username: "", password: "", isLogged: true });
        } else {
            this.setState({ username: "", password: "", message: "Invalid credentials", isLogged: false });
        }
    }

    render() {
        return (
            <div className="Login">
                {this.state.isLogged ?
                    <Redirect to="/home/" />
                    :
                    <div className="Login-box">
                        <div className="Login-message">
                            <label>{this.state.message}</label>
                        </div>
                        <form onSubmit={this.onSubmit}>
                            <div className="Login-box-formbox">
                                <label className="Login-box-username">Username</label>
                                <input type="text" value={this.state.username} onChange={(e) => { this.setState({ username: e.target.value }) }} className="Login-username-input" />
                            </div>
                            <div className="Login-box-formbox">
                                <label className="Login-box-password">Password</label>
                                <input type="password" value={this.state.password} onChange={(e) => { this.setState({ password: e.target.value }) }} className="Login-username-input" />
                            </div>
                            <button type="submit" className="Login-button-submit">Log in</button>
                        </form>
                    </div>
                }
            </div >
        );
    }

}




export default Login;
