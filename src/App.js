import 'babel-polyfill'
import React, { Component } from 'react';
import {Welcome, Home} from './containers/index'; 
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/home" component={Home} />
            <Route component = {Home} />
          </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
