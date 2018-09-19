import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

export class GWtoRS extends Component {
    render() {
        return (
            <div>
            <img src="https://firebasestorage.googleapis.com/v0/b/virttour-2018.appspot.com/o/uwMap.jpg?alt=media&token=0e67239e-4df8-4c8e-b00e-daa5eee844d1" alt="map"></img>
                <Router>
                    <div>
                        <Link to="/georgewashington"><button className="btn btn-primary">Previous Stop</button></Link>
                        <Link to="/redsquare"><button className="btn btn-primary">Next Stop</button></Link>
                    </div>
                </Router>
            </div>
        )
    }
}