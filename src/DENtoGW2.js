import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import "./DENtoGW2.css";

export class DENtoGW2 extends Component {
    render() {
        return (
            <div className="imgbox">
                {/* Static image file upload */}
                <img className="center-fit" 
                src="https://firebasestorage.googleapis.com/v0/b/virttour-2018.appspot.com/o/DENtoGW2.png?alt=media&token=3e3f32cd-7ea8-46c9-a84f-0587ac708a72" 
                alt="map"></img>

                {/* Router tag needed for buttons to link to the correct page */}
                <Router>
                    <div className="buttonFloat">
                        {/* Link tags make the buttons links to the correct pages based on the endpoints specified in App.js */}
                        <Link to="/denny"><button className="btn btn-primary" style={{'font-family':'BodyFont'}}>Previous Stop</button></Link>
                        <Link to="/george2"><button className="btn btn-primary" style={{'font-family':'BodyFont'}}>Continue</button></Link>
                    </div>
                </Router>
            </div>
        )
    }
}

