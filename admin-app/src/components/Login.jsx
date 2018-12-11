import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/Login.css'
import * as api from '../api.js'

class Login extends Component {
  state = {
    username: '',
    password: ''
  }
  render() {
    const { user } = this.props
    if (user.username) {
      return (
        <main class="welcome">
          <p>Welcome to the City Quest Management Portal</p>
        </main>
      )
    } else {
      return (
        <main class="login">
        <form onSubmit={this.handleSubmit}>
          <label>Username:</label>
          <input type="text" name="" id="username" value={this.state.username} onChange={this.handleChange}/>
          <label>Password:</label>
          <input type="password" name="" id="password" value={this.state.password} onChange={this.handleChange}/>
          <button>Log In</button>
        </form>
      </main>
      )
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
        } else {
          console.log('not a valid password')
        }
      })
      .catch(err => {
        console.log('not a valid admin')
        this.setState({ err });
      });
  };

}

Login.propTypes = {

};

export default Login;