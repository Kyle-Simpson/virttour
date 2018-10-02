import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';

// The order of imports is the order of files that will be accessed when using the website
// The components with the word "to" in the name are connecting pages that show a map to the next destination
// The components without the word "to" in the name are the content pages with audio files
import { HomePage } from "./HomePage"; // Intro page
import { GW } from "./GW"; // George Washington Statue
import { GWtoRS } from "./GWtoRS"; // Connector between George Washington and Red Square
import { RS } from "./RS"; // Red Square
import { RStoSUZZ } from "./RStoSUZZ"; // Connector between Red Square and Suzzalo Library
import { SUZZ } from "./SUZZ"; // Suzzalo Library
import { SUZZtoMGH } from "./SUZZtoMGH"; // Connector between Suzzalo and Mary Gates Hall
import { MGH } from "./MGH"; // Mary Gates Hall
import { MGHtoDRUM } from "./MGHtoDRUM"; // Connector between Mary Gates Hall and Drumheller Fountain
import { DRUM } from "./DRUM"; // Drumheller Fountain  
import { DRUMtoRV } from "./DRUMtoRV"; // Connector between Drumheller and Rainier Vista
import { RV } from "./RV"; // Rainier Vista
import { RVtoHUB } from "./RVtoHUB"; // Connector between Rainier Vista and the HUB
import { HUB } from "./HUB"; // Husky Union Building
import { HUBtoWET } from "./HUBtoWET"; // Connector between HUB and Intellectual House
import { WET } from "./WET"; // Intellectual House
import { WETtoQUAD } from "./WETtoQUAD"; // Connector between Intellectual House and the QUAD
import { QUAD } from "./QUAD"; // QUAD
import { QUADtoDEN } from "./QUADtoDEN"; // Connector between the QUAD and Denny Hall
import { DEN } from "./DEN"; // Denny Hall
import { DENtoGW2 } from "./DENtoGW2"; // Connector between Denny Hall and return to the George Washington Statue
import { GW2 } from "./GW2"; // Return to the George Washington Statue
import { GW2toWC } from "./GW2toWC"; // Connector between second George stop and West Campus
import { WC } from "./WC"; // West Campus
import { FIN } from "./FIN"; // Concluding stop

class App extends Component {
  render() {
    return (
      <div className="App">
        {
          // The Router component lists the entirety of the pages and their endpoints
          // The 'path' parameter denotes the endpoint and the 'component' parameter denotes the js file (component) that will be shown when visiting the endpoint
        }
        <Router>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route path="/georgewashington" component={GW} />
            <Route path="/GWtoRS" component={GWtoRS} />
            <Route path="/redsquare" component={RS} />
            <Route path="/RStoSUZZ" component={RStoSUZZ} />
            <Route path="/suzzalo" component={SUZZ} />
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
            <Route path="/DENtoGW2" component={DENtoGW2} />
            <Route path="/george2" component={GW2} />
            <Route path="/GW2toWC" component={GW2toWC} />
            <Route path="/westcampus" component={WC} />
            <Route path="/fin" component={FIN} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
