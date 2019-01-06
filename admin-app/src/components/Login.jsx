import React, { Component } from "react";
import "./css/Login.css";
import * as api from "../api.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchLocation } from "@fortawesome/free-solid-svg-icons";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };
  render() {
    const { user } = this.props;
    if (user.username) {
      return (
        <main class="welcome">
          <p>Welcome to</p>
          <img alt="city quest management" src="./assets/titlegrey.png" />
        </main>
      );
    } else {
      return (
        <main class="login">
          <form onSubmit={this.handleSubmit}>
            <label>Username:</label>
            <input
              type="text"
              name=""
              id="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <label>Password:</label>
            <input
              type="password"
              name=""
              id="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <button>Log In</button>
          </form>
        </main>
      );
    }
  }

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({
      [id]: value
    });
  };

  handleSubmit = event => {
    const { login } = this.props;
    event.preventDefault();
    api
      .getAdminByUsername(this.state.username)
      .then(user => {
        if (user.password === this.state.password) {
          login(user);
          this.setState({
            username: '',
            password: ''
          })
        } else {
          console.log("not a valid password");
        }
      })
      .catch(err => {
        console.log("not a valid admin");
        this.setState({ err });
      });
  };
}


export default Login;
