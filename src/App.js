import React, { Component } from 'react';
import { HomePage } from "./HomePage";
import { HashRouter as Router, Route } from 'react-router-dom';
import {GW} from "./GW";
import {GWtoRS} from "./GWtoRS";
import {RS} from "./RS";
import {RStoSUZZ} from "./RStoSUZZ";
import {SUZZ} from "./SUZZ";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route path="/georgewashington" component={GW} />
            <Route path="/GWtoRS" component={GWtoRS} />
            <Route path="/redsquare" component={RS} />
            <Route path="/RStoSUZZ" component={RStoSUZZ} />
            <Route path="/suzzalo" component={SUZZ} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
