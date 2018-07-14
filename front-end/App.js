import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

class App extends Component {

  componentDidMount() {

    //Authenticate User, if not login redirect user to login page, if already Login
    //take user to homepage
    //axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios.get('/api/auth', { 'headers': { 'Authorization': localStorage.getItem('jwtToken')} })
      .then(res => {
        //display homepage (App.js)
      })
      .catch((error) => {
        console.log(error)
        //redirect to login page
        if(error.response.status === 401) {
          this.props.history.push("/login");
        }
      });
  }
  logout = () => {
    localStorage.removeItem('jwtToken');
    window.location.reload();
  }

  render() {
    return (
      <div>
        {localStorage.getItem('jwtToken') &&
          <div>
            <h1> Welcome to TripSquad</h1>
            <button class="btn btn-primary" onClick={this.logout}>Logout</button>
          </div>
        }
      </div>
    );
  }
}

export default App;
