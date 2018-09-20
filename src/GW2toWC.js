import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import "./GW2toWC.css";

export class GW2toWC extends Component {
    render() {
        return (
            <div className="imgbox">
                <img className="center-fit" src="https://firebasestorage.googleapis.com/v0/b/virttour-2018.appspot.com/o/GW2toWC.png?alt=media&token=9a270e6f-4d50-4e1d-83c3-79ae880a0eb3" alt="map"></img>

                <Router>
                    <div className="buttonFloat">
                        <Link to="/george2"><button className="btn btn-primary">Previous Stop</button></Link>
                        <Link to="/westcampus"><button className="btn btn-primary">Continue</button></Link>
                    </div>
                </Router>
            </div>
        )
    }
}