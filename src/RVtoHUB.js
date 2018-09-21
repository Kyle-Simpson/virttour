import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import "./RVtoHUB.css";

export class RVtoHUB extends Component {
    render() {
        return (
            <div className="imgbox">
                <img className="center-fit" src="https://firebasestorage.googleapis.com/v0/b/virttour-2018.appspot.com/o/RVtoHUB.png?alt=media&token=4ba0de7b-864e-45e6-8446-1c23399b73c8" alt="map"></img>

                <Router>
                    <div className="buttonFloat">
                        <Link to="/raniervista"><button className="btn btn-primary" style={{'font-family':'BodyFont'}}>Previous Stop</button></Link>
                        <Link to="/huskyunionbuilding"><button className="btn btn-primary" style={{'font-family':'BodyFont'}}>Continue</button></Link>
                    </div>
                </Router>
            </div>
        )
    }
}