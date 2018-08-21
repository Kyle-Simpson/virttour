import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';


export class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>Virtual Campus Tour</h1>
                <p>Welcome to the University of Washington</p>
                <p>To begin the Campus Tour, make your way to the Husky Union Building and click Begin</p>
                <Router>
                    <Link to="/hub"><button className="btn btn-primary">Begin</button></Link>
                </Router>
            </div>
        );
    }
}

