import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import './GWtoRS.css';

export class GWtoRS extends Component {
    render() {
        return (
            <div className="imgbox">
            <img className="center-fit" src="https://firebasestorage.googleapis.com/v0/b/virttour-2018.appspot.com/o/GWtoRS.jpg?alt=media&token=151087de-25ce-47cf-84da-2963d227a07a" alt="map"></img>
                <Router>
                    <div className="buttonFloat">
                        <Link to="/georgewashington" style={{'font-family':'BodyFont'}}><button className="btn btn-primary">Previous Stop</button></Link>
                        <Link to="/redsquare" style={{'font-family':'BodyFont'}}><button className="btn btn-primary">Continue</button></Link>
                    </div>
                </Router>
            </div>
        )
    }
}