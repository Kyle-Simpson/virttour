import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

export class FIN extends Component {
    render() {
        return (
            <div>
                {/* Styles to conform to UW branding.  See HomePage.css for specific branding guidelines */}
                <h1 style={{'font-family':'HeaderFont', 'color':'white'}}>Thank You!</h1>
                
                {/* Router tag needed for buttons to link to the correct page */}
                <Router>
                    <div>
                        {/* Link tags make the buttons links to the correct pages based on the endpoints specified in App.js */}
                        <Link to="/westcampus"><button className="btn btn-primary" style={{'font-family':'BodyFont'}}>Previous Stop</button></Link>
                    </div>
                </Router>
            </div>
        )
    }
}