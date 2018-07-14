import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import Login from './components/Login'
import Register from './components/Register'
import ResetPassword from './components/ResetPassword.js'
import UpdatePassword from './components/UpdatePassword.js'
ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={App} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/reset-password' component={ResetPassword} />
      <Route path='/api/auth/reset/:token' component={UpdatePassword} />
    </div>
  </Router>,
  document.getElementById('root')
)
registerServiceWorker()
