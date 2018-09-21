import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import "./WETtoQUAD.css";

export class WETtoQUAD extends Component {
    render() {
        return (
            <div className="imgbox">
                        <img className="center-fit" src="https://firebasestorage.googleapis.com/v0/b/virttour-2018.appspot.com/o/WETtoQUAD.png?alt=media&token=b91e3f71-bbca-4829-bd38-5fe8a527211e" alt="map"></img>

                <Router>
                    <div className="buttonFloat">
                        <Link to="/wǝɫǝbʔaltxʷ"><button className="btn btn-primary" style={{'font-family':'BodyFont'}}>Previous Stop</button></Link>
                        <Link to="/quad"><button className="btn btn-primary" style={{'font-family':'BodyFont'}}>Continue</button></Link>
                    </div>
                </Router>
            </div>
        )
    }
}