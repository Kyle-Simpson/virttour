import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

export class WC extends Component {

    render() {
        return (
            <div>
                <h1 style={{'font-family':'HeaderFont', 'color':'white'}}>West Campus</h1>
                <audio controls controlsList="nodownload">
                    <source src="https://firebasestorage.googleapis.com/v0/b/virttour-2018.appspot.com/o/12%20West%20Campus%20v4_mixdown_FNL.mp3?alt=media&token=500dfe09-8213-4f70-80c6-ffc71d1b5b23"></source>
                </audio><br></br>
                <a href="" style={{'font-family':'BodyFont', 'color':'white'}}><u>Captions</u></a>
                <Router>
                    <div>
                        <Link to="/GW2toWC"><button className="btn btn-primary" style={{'font-family':'BodyFont'}}>Previous Stop</button></Link>
                        <Link to="fin"><button className="btn btn-primary" style={{'font-family':'BodyFont'}}>Finish</button></Link>
                    </div>
                </Router>
            </div>
        )
    }
}