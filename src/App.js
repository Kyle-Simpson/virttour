import React, { Component } from 'react';
import { HomePage } from "./HomePage";
import { HashRouter as Router, Route } from 'react-router-dom';
import { GW } from "./GW";
import { GWtoRS } from "./GWtoRS";
import { RS } from "./RS";
import { RStoSUZZ } from "./RStoSUZZ";
import { SUZZ } from "./SUZZ";
/*
import {SUZZtoMGH} from "./SUZZtoMGH";
import {MGH} from "./MGH";
import {MGHtoDRUM} from "./MGHtoDRUM";
import {DRUM} from "./DRUM";
import {DRUMtoRV} from "./DRUMtoRV";
import {RV} from "./RV";
import {RVtoHUB} form "./RVtoHUB";
import {HUB} from "./HUB";
import {HUBtoWET} from "./HUBtoWET";
import {WET} from "./WET"};
import {WETtoQUAD} from "./WETtoQUAD";
import {QUAD} from "./QUAD";
import {QUADtoDEN} from "./QUADtoDEN";
import {DEN} from "./DEN";
import {DENtoGW} from "./DENtoGW";
*/
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
            {/*
            <Route path="/SUZZtoMGH" component={SUZZtoMGH} />
            <Route path="/marygates" component={MGH} />
            <Route path="/MGHtoDRUM" component={MGHtoDRUM} />
            <Route path="/drumheller" component={DRUM} />
            <Route path="/DRUMtoRV" component={DRUMtoRV} />
            <Route path="/raniervista" component={RV} />
            <Route path="/RVtoHUB" component={RVtoHUB} />
            <Route path="/huskyunionbuilding" component={HUB} />
            <Route path="/HUBtoWET" component={HUBtoWET} />
            <Route path="/wǝɫǝbʔaltxʷ" component={WET} />
            <Route path="/WETtoQUAD" component={WETtoQUAD} />
            <Route path="/quad" component={QUAD} />
            <Route path="/QUADtoDEN" component={QUADtoDEN} />
            <Route path="/denny" component={DEN} />
            <Route path="/DENtoGW" component={DENtoGW} />
            */}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
