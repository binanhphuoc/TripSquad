import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Login.css';

class ResetPassword extends Component {

  constructor() {
    super();
    this.state = {
      password: '',
      confirmPassword: '',
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

    const { password,confirmPassword,message } = this.state;
      if (password === confirmPassword) {
        console.log(this.props.match.params.token);

         axios.post(`/api/auth/reset/${this.props.match.params.token}`,{password})
         .then((result) => {
            this.setState({message: "Password has been reset. You can now login with your new password"});
         })
         .catch((error) => {
           if(error.response.status === 401) {
             this.setState({ message: 'Password Reset Link Expired or Invalid' });
           }
         });
      } else {
        this.setState({ message: 'Password not matching'});
      }
  }

  render() {
    const { password, confirmPassword, message } = this.state;
    return (
      <div class="container">
        <form class="form-signin" onSubmit={this.onSubmit}>
          {message !== '' &&
            <div class="alert alert-warning alert-dismissible" role="alert">
              { message }
            </div>
          }
          <h4 class="form-signin-heading">Update Your New Password</h4>
          <label for="inputPassword" class="sr-only">Password</label>
          <input type="password" pattern=".{8,}" title="Must contain at least 8 or more characters" class="form-control" placeholder="Password" name="password" value={password} onChange={this.onChange} required/>
          <label for="confirmPassword" class="sr-only">Confirm Password</label>
          <input type="password" class="form-control" placeholder="Confirm Password" name="confirmPassword" value={confirmPassword} onChange={this.onChange} required/>
          <button class="btn btn-lg btn-primary btn-block" type="submit">Update Password</button>
        </form>
      </div>
    );
  }
}

export default ResetPassword;
