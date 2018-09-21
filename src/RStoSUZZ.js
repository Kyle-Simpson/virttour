import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import "./RStoSUZZ.css";

export class RStoSUZZ extends Component {
    render() {
        return (
            <div className="imgbox">
                <img className="center-fit" src="https://firebasestorage.googleapis.com/v0/b/virttour-2018.appspot.com/o/RStoSUZZ.png?alt=media&token=8b0fb38a-d5f6-4fbc-8e86-c25e7d49095f" alt="map"></img>

                <Router>
                    <div className="buttonFloat">
                        <Link to="/redsquare"><button className="btn btn-primary" style={{'font-family':'BodyFont'}}>Previous Stop</button></Link>
                        <Link to="/suzzalo"><button className="btn btn-primary" style={{'font-family':'BodyFont'}}>Continue</button></Link>
                    </div>
                </Router>
            </div>
        )
    }
}