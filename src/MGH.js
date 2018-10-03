import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

export class MGH extends Component {

    render() {
        return (
            <div>
                <h1 style={{'font-family':'HeaderFont', 'color':'white'}}>Mary Gates Hall</h1>
                <audio controls controlsList="nodownload">
                    <source src="https://firebasestorage.googleapis.com/v0/b/virttour-2018.appspot.com/o/4%20Mary%20Gates%20Hall%20v6_mixdown_FNL.mp3?alt=media&token=016135fd-789f-4231-aaae-47a9e6730f88"></source>
                </audio>
                <Router>
                    <div>
                        <Link to="/SUZZtoMGH"><button className="btn btn-primary" style={{'font-family':'BodyFont'}}>Previous Stop</button></Link>
                        <Link to="/MGHtoDRUM"><button className="btn btn-primary" style={{'font-family':'BodyFont'}}>Next Stop</button></Link>
                    </div>
                </Router>
            </div>
        )
    }
}