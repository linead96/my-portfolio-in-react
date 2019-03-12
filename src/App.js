import React, { Component } from 'react';
import {Welcome, Home} from './containers/index'; 
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router basename="/my-portfolio-in-react">
        <div className="App">
        <Route exact path="/" component={Welcome} />
        <Route exact path="/home" component={Home} />
      </div>
      </Router>
      
    );
  }
}

export default App;
