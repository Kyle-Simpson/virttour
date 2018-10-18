import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import './HomePage.css';


export class HomePage extends Component {
    render() {
        return (
            <div>
                {/* Styles to conform to UW branding.  See HomePage.css for specific branding guidelines */}
                <h1 style={{ 'font-family': 'HeaderFont', 'color': 'white' }}>
                    Virtual Campus Tour
                </h1>
                <p style={{ 'font-family': 'BodyFont', 'color': 'white' }}>
                    Welcome to the University of Washington
                </p>
                <p style={{ 'font-family': 'BodyFont', 'color': 'white' }}>
                    To begin the Campus Tour, make your way to the George Washington Statue near West Campus and click Begin
                </p>
                {/* Router tag needed for buttons to link to the correct page */}
                <Router>
                    <div>
                        {/* Link tags make the buttons links to the correct pages based on the endpoints specified in App.js */}
                        <Link to="/georgewashington"><button className="btn btn-primary" style={{'font-family':'BodyFont'}}>Begin</button></Link>
                    </div>
                </Router>
            </div>
        );
    }
}

