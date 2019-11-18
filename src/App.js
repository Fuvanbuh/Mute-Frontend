import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute.js';
import AnonRoute from './components/AnonRoute.js';

//import Home from './pages/Home';
import Welcome from './pages/Welcome'
import Signup from './pages/Signup';
import Login from './pages/Login';
import HomePage from './pages/HomePage';

import AuthProvider from './contexts/auth-context.js';

import './App.css';
import EditStory from './pages/EditStory.js';
import NewStory from './pages/NewStory.js';
import TravelMap from './pages/TravelMap.js';
import Lecture from './pages/Lecture.js';
import Questions from './pages/Questions.js';
import Win from './pages/Win.js';





class App extends Component {
  render() {
    return (
      <Router>
        <AuthProvider>
          <div >
            <Switch>
              <AnonRoute path="/" exact component={Welcome} />
              <AnonRoute path="/signup" exact component={Signup} />
              <AnonRoute path="/login" exact component={Login} />
              <PrivateRoute path="/homePage" exact component={HomePage} />
              <PrivateRoute path="/editStory" exact component={EditStory} />
              <PrivateRoute path="/newStory" excat component={NewStory} />
              <PrivateRoute path="/travelMap/:idMap" exact component={TravelMap} />
              <PrivateRoute path="/travelMap/:idMap/path/:pathNum" exact component={Lecture} />
              <PrivateRoute path="/travelMap/:idMap/path/:pathNum/questions" exact component={Questions} />
              <PrivateRoute path="/win" exact component={Win} />
              
              

              {/* <PrivateRoute path="/home" exact component={Home} /> */}
            </Switch>
          </div>
        </AuthProvider>
      </Router>
    )
  }
}

export default App;
