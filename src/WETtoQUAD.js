import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

export class WETtoQUAD extends Component {
    render() {
        return (
            <div className="imgHere">
                <Router>
                    <div>
                        <Link to="/wǝɫǝbʔaltxʷ"><button className="btn btn-primary">Previous Stop</button></Link>
                        <Link to="/quad"><button className="btn btn-primary">Next Stop</button></Link>
                    </div>
                </Router>
            </div>
        )
    }
}