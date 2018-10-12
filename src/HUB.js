import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

export class HUB extends Component {

    render() {
        return (
            <div>
                <h1 style={{'font-family':'HeaderFont', 'color':'white'}}>Husky Union Building</h1>
                <audio controls controlsList="nodownload">
                    <source src="https://firebasestorage.googleapis.com/v0/b/virttour-2018.appspot.com/o/7%20HUB%20v5_mixdown_FNL.mp3?alt=media&token=0ad8c33d-f977-462a-9829-758de59cd8d1"></source>
                </audio><br></br>
                <a href="" style={{'font-family':'BodyFont', 'color':'white'}}><u>Captions</u></a>
                <Router>
                    <div>
                        <Link to="/RVtoHUB"><button className="btn btn-primary" style={{'font-family':'BodyFont'}}>Previous Stop</button></Link>
                        <Link to="/HUBtoWET"><button className="btn btn-primary" style={{'font-family':'BodyFont'}}>Next Stop</button></Link>
                    </div>
                </Router>
            </div>
        )
    }
}