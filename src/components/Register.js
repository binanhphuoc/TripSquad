import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Login.css';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      confirmPassword:'',
      userType:'Admin'
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }
  handleOptionChange = (changeEvent) =>{
    this.setState({
      userType: changeEvent.target.value
    });
    this.state.userType = changeEvent.target.value;
  }


  onSubmit = (e) => {
    e.preventDefault();

    const { username, password,confirmPassword, userType } = this.state;
      if (password == confirmPassword) {
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').innerHTML = 'Passowrd matching';
        axios.post('/api/auth/register', { username, password, userType })//send register info to register api
          .then((result) => {
            this.props.history.push("/login")
          }).catch((err)=>{
            document.getElementById('message').style.color = 'red';
            document.getElementById('message').innerHTML = 'User Already Existed';
          });
      } else {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = 'Password not matching';
      }
  }

  render() {
    const { username, password ,confirmPassword,userType} = this.state;
    return (
      <div class="container">
        <form class="form-signin" onSubmit={this.onSubmit}>
          <h2 class="form-signin-heading">Register</h2>
          <label for="inputEmail" class="sr-only">Email address</label>
          <input type="email" class="form-control" placeholder="Email address" name="username" value={username} onChange={this.onChange} required/>
          <label for="inputPassword" class="sr-only">Password</label>
          <input type="password" pattern=".{8,}" title="Must contain at least 8 or more characters" class="form-control" placeholder="Password" name="password" value={password} onChange={this.onChange} required/>
          <label for="confirmPassword" class="sr-only">Confirm Password</label>
          <input type="password" class="form-control" placeholder="Confirm Password" name="confirmPassword" value={confirmPassword} onChange={this.onChange} required/>
            <div className="radio">
              <label>
                <input type="radio" value="Admin" checked={this.state.userType === 'Admin'} onChange={this.handleOptionChange} />
                Admin
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" value="Client" checked={this.state.userType === 'Client'} onChange={this.handleOptionChange} />
                Client
              </label>
            </div>

          <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>

          <p id="message"></p>
        </form>
      </div>
    );
  }
}

export default Create;
