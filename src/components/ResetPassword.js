import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Login.css';

class ResetPassword extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      message: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { username } = this.state;

    //Make request to '/api/auth/resetPassword'
    axios.post('/api/auth/resetPassword', { username })
      .then((result) => {

         this.setState({ message: 'Password reset request sent' });
      })
      .catch((error) => {
        if(error.response.status === 401) {
          this.setState({ message: 'No user found, Please Register' });
        }
      });
  }

  render() {
    const { username, message } = this.state;
    return (
      <div class="container">
        <form class="form-signin" onSubmit={this.onSubmit}>
          {message !== '' &&
            <div class="alert alert-warning alert-dismissible" role="alert">
              { message }
            </div>
          }
          <h4 class="form-signin-heading">Enter your email to receive Reset Password Link</h4>
          <label for="inputEmail" class="sr-only">Email address</label>
          <input type="email" class="form-control" placeholder="Email address" name="username" value={username} onChange={this.onChange} required/>

          <button class="btn btn-lg btn-primary btn-block" type="submit">Reset Password</button>
        </form>
      </div>
    );
  }
}

export default ResetPassword;
