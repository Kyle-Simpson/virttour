import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import "./HUBtoWET.css";

export class HUBtoWET extends Component {
    render() {
        return (
            <div className="imgbox">
                <img className="center-fit" src="https://firebasestorage.googleapis.com/v0/b/virttour-2018.appspot.com/o/HUBtoWET.png?alt=media&token=2608215f-648f-418f-ba4b-d2cdb8099497" alt="map"></img>

                <Router>
                    <div className="buttonFloat">
                        <Link to="/huskyunionbuilding"><button className="btn btn-primary" style={{'font-family':'BodyFont'}}>Previous Stop</button></Link>
                        <Link to="/wǝɫǝbʔaltxʷ"><button className="btn btn-primary" style={{'font-family':'BodyFont'}}>Continue</button></Link>
                    </div>
                </Router>
            </div>
        )
    }
}