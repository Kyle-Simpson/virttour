import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import "./MGHtoDRUM.css";

export class MGHtoDRUM extends Component {
    render() {
        return (
            <div className="imgbox">
                <img className="center-fit" src="https://firebasestorage.googleapis.com/v0/b/virttour-2018.appspot.com/o/MGHtoDRUM.png?alt=media&token=60ebc910-4182-43c3-829a-18c63a7bbd5a" alt="map"></img>

                <Router>
                    <div className="buttonFloat">
                        <Link to="/marygates"><button className="btn btn-primary" style={{'font-family':'BodyFont'}}>Previous Stop</button></Link>
                        <Link to="/drumheller"><button className="btn btn-primary" style={{'font-family':'BodyFont'}}>Continue</button></Link>
                    </div>
                </Router>
            </div>
        )
    }
}