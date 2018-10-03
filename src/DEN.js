import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

export class DEN extends Component {

    render() {
        return (
            <div>
                {/* Styles to conform to UW branding.  See HomePage.css for specific branding guidelines */}
                <h1 style={{'font-family':'HeaderFont', 'color':'white'}}>Denny Hall</h1>
                {/* Static audio file upload - do not allow download */}
                <audio controls controlsList="nodownload">
                    <source src="https://firebasestorage.googleapis.com/v0/b/virttour-2018.appspot.com/o/10%20Denny%20Yard%20v3_mixdown_FNL.mp3?alt=media&token=7d2fb41b-c3e5-4c55-9b7b-65a73bf880ec"></source>
                </audio>
                {/* Router tag needed for buttons to link to the correct page */}
                <Router>
                    <div>
                        {/* Link tags make the buttons links to the correct pages based on the endpoints specified in App.js */}
                        <Link to="/QUADtoDEN"><button className="btn btn-primary" style={{'font-family':'BodyFont'}}>Previous Stop</button></Link>
                        <Link to="/DENtoGW2"><button className="btn btn-primary" style={{'font-family':'BodyFont'}}>Next Stop</button></Link>
                    </div>
                </Router>
            </div>
        )
    }
}