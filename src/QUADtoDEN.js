import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import "./QUADtoDEN.css";

export class QUADtoDEN extends Component {
    render() {
        return (
            <div className="imgbox">
                <img className="center-fit" src="https://firebasestorage.googleapis.com/v0/b/virttour-2018.appspot.com/o/QUADtoDEN.png?alt=media&token=5f28bd88-c099-419c-abce-afe07e8a8e07" alt="map"></img>

                <Router>
                    <div className="buttonFloat">
                        <Link to="/quad"><button className="btn btn-primary" style={{'font-family':'BodyFont'}}>Previous Stop</button></Link>
                        <Link to="/denny"><button className="btn btn-primary" style={{'font-family':'BodyFont'}}>Continue</button></Link>
                    </div>
                </Router>
            </div>
        )
    }
}