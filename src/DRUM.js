import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import firebase from 'firebase';

export class DRUM extends Component {

    render() {
        return (
            <div>
                <h1 style={{'font-family':'HeaderFont', 'color':'white'}}>Drumheller Fountain</h1>
                <audio controls controlsList="nodownload">
                    <source src="https://firebasestorage.googleapis.com/v0/b/virttour-2018.appspot.com/o/5%20Drumheller%20Fountain%20v7_mixdown_FNL.mp3?alt=media&token=5815001d-1d9a-45ca-9ac2-a1840a594c90"></source>
                </audio>
                <Router>
                    <div>
                        <Link to="/MGHtoDRUM"><button className="btn btn-primary" style={{'font-family':'BodyFont'}}>Previous Stop</button></Link>
                        <Link to="/DRUMtoRV"><button className="btn btn-primary" style={{'font-family':'BodyFont'}}>Next Stop</button></Link>
                    </div>
                </Router>
            </div>
        )
    }
}