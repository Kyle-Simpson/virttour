import React, { Component } from 'react';
import { HomePage } from "./HomePage";
import { HashRouter as Router, Route } from 'react-router-dom';
import {HubStop} from "./HubStop";
import {NextStop} from "./NextStop";
// import {QuadStop} from "./QuadStop";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route path="/hub" component={HubStop} />
            <Route path="/nextStop" component={NextStop} />
            {/* <Route path="/quad" component={QuadStop} /> */}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
