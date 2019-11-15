import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute.js';
import AnonRoute from './components/AnonRoute.js';

import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';

import AuthProvider from './contexts/auth-context.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <AuthProvider>
          <div >
            <h1>Basic React Authentication</h1>
            <Switch>
              <AnonRoute path="/signup" exact component={Signup} />
              <AnonRoute path="/login" exact component={Login} />
              <PrivateRoute path="/home" exact component={Home} />
            </Switch>
          </div>
        </AuthProvider>
      </Router>
    )
  }
}

export default App;
