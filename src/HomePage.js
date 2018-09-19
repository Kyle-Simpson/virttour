import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import './HomePage.css';


export class HomePage extends Component {
    render() {
        return (
            <div>
                <h1 style={{'font-family':'HeaderFont'}}>Virtual Campus Tour</h1>
                <p style={{'font-family':'BodyFont'}}>Welcome to the University of Washington</p>
                <p style={{'font-family':'BodyFont'}}>To begin the Campus Tour, make your way to the George Washington Statue near West Campus and click Begin</p>
                <Router>
                    <Link to="/georgewashington"><button className="btn btn-primary">Begin</button></Link>
                </Router>
            </div>
        );
    }
}

