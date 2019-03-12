import React, { Component } from 'react';
import {Welcome, Home} from './containers/index'; 
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Route path="/home" component={Home} />
        <Route exact path="/" component={Welcome} />
        <Route component={Welcome} />
      </div>
      </Router>
      
    );
  }
}

export default App;
