import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import "./DENtoGW2.css";

export class DENtoGW2 extends Component {
    render() {
        return (
            <div className="imgbox">
                <img className="center-fit" src="https://firebasestorage.googleapis.com/v0/b/virttour-2018.appspot.com/o/DENtoGW2.png?alt=media&token=3e3f32cd-7ea8-46c9-a84f-0587ac708a72" alt="map"></img>

                <Router>
                    <div className="buttonFloat">
                        <Link to="/denny"><button className="btn btn-primary">Previous Stop</button></Link>
                        <Link to="/george2"><button className="btn btn-primary">Continue</button></Link>
                    </div>
                </Router>
            </div>
        )
    }
}