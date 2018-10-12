import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

export class GW extends Component {

    render() {
        return (
            <div>
                <h1 style={{'font-family':'HeaderFont', 'color':'white'}}>George Washington Statue</h1>
                <audio controls controlsList="nodownload">
                    <source src="https://firebasestorage.googleapis.com/v0/b/virttour-2018.appspot.com/o/1%20GW%20Statue%20-%20Intro%20v7_mixdown_FNL.mp3?alt=media&token=7b80ad12-648d-4f1e-a397-33a3f01d89e0"></source>
                </audio><br></br>
                <a href="https://firebasestorage.googleapis.com/v0/b/virttour-2018.appspot.com/o/1%20GW%20Statue%20-%20Intro%20v7_mixdown_FNL.mp3.txt?alt=media&token=6c7dcfa4-4c2f-4b84-b1d3-000b8c517379" style={{'font-family':'BodyFont', 'color':'white'}}><u>Captions</u></a>
                <Router>
                    <div>
                        <Link to="/"><button className="btn btn-primary" style={{'font-family':'BodyFont'}}>Back to Intro</button></Link>
                        <Link to="/GWtoRS"><button className="btn btn-primary" style={{'font-family':'BodyFont'}}>Next Stop</button></Link>
                    </div>
                </Router>
            </div>
        );
    }
}

