import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

export class DENtoGW2 extends Component {
    render() {
        return (
            <div className="imgHere">
                <Router>
                    <div>
                        <Link to="/denny"><button className="btn btn-primary">Previous Stop</button></Link>
                        <Link to="/george2"><button className="btn btn-primary">Next Stop</button></Link>
                    </div>
                </Router>
            </div>
        )
    }
}