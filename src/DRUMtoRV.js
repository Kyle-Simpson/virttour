import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

export class DRUMtoRV extends Component {
    render() {
        return (
            <div className="imgHere">
                <Router>
                    <div>
                        <Link to="/drumheller"><button className="btn btn-primary">Previous Stop</button></Link>
                        <Link to="/raniervista"><button className="btn btn-primary">Next Stop</button></Link>
                    </div>
                </Router>
            </div>
        )
    }
}