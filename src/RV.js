import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

export class RV extends Component {

    render() {
        return (
            <div>
                <h1 style={{'font-family':'HeaderFont', 'color':'white'}}>Rainier Vista</h1>
                <audio controls controlsList="nodownload">
                    <source src="https://firebasestorage.googleapis.com/v0/b/virttour-2018.appspot.com/o/6%20Rainier%20Vista%20v5_mixdown_FNL.mp3?alt=media&token=1c48fc05-3a08-4f29-b3c5-d180de636d4e"></source>
                </audio>
                <Router>
                    <div>
                        <Link to="/DRUMtoRV"><button className="btn btn-primary" style={{'font-family':'BodyFont'}}>Previous Stop</button></Link>
                        <Link to="/RVtoHUB"><button className="btn btn-primary" style={{'font-family':'BodyFont'}}>Next Stop</button></Link>
                    </div>
                </Router>
            </div>
        )
    }
}