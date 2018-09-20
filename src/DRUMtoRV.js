import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import "./DRUMtoRV.css";

export class DRUMtoRV extends Component {
    render() {
        return (
            <div className="img box">
                <img className="center-fit" src="https://firebasestorage.googleapis.com/v0/b/virttour-2018.appspot.com/o/DRUMtoRV.png?alt=media&token=c2fef5b3-49c9-4629-8b06-3c5514b99c38" alt="map"></img>

                <Router>
                    <div className="buttonFloat">
                        <Link to="/drumheller"><button className="btn btn-primary">Previous Stop</button></Link>
                        <Link to="/raniervista"><button className="btn btn-primary">Continue</button></Link>
                    </div>
                </Router>
            </div>
        )
    }
}