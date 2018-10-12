import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

export class GW2 extends Component {

    render() {
        return (
            <div>
                <h1 style={{'font-family':'HeaderFont', 'color':'white'}}>Return to George Washington</h1>
                <audio controls controlsList="nodownload">
                    <source src="https://firebasestorage.googleapis.com/v0/b/virttour-2018.appspot.com/o/11%20GW%20Return%20V3_mixdown_FNL.mp3?alt=media&token=0e84a785-cfa9-4acd-a716-1d34e7b05906"></source>
                </audio><br></br>
                <a href="" style={{'font-family':'BodyFont', 'color':'white'}}><u>Captions</u></a>
                <Router>
                    <div>
                        <Link to="/DENtoGW2"><button className="btn btn-primary" style={{'font-family':'BodyFont'}}>Previous Stop</button></Link>
                        <Link to="/GW2toWC"><button className="btn btn-primary" style={{'font-family':'BodyFont'}}>Next Stop</button></Link>
                    </div>
                </Router>
            </div>
        )
    }
}