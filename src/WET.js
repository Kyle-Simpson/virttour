import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

export class WET extends Component {

    render() {
        return (
            <div>
                <h1 style={{'font-family':'HeaderFont', 'color':'white'}}>Wǝɫǝbʔaltxʷ</h1>
                <audio controls controlsList="nodownload">
                    <source src="https://firebasestorage.googleapis.com/v0/b/virttour-2018.appspot.com/o/8%20W%C7%9D%C9%AB%C7%9Db%CA%94altx%CA%B7%20v7_mixdown_FNL.mp3?alt=media&token=d5bca68d-d31e-46f0-b2ce-50898c6bc7a9"></source>
                </audio>
                <Router>
                    <div>
                        <Link to="/HUBtoWET"><button className="btn btn-primary" style={{'font-family':'BodyFont'}}>Previous Stop</button></Link>
                        <Link to="/WETtoQUAD"><button className="btn btn-primary" style={{'font-family':'BodyFont'}}>Next Stop</button></Link>
                    </div>
                </Router>
            </div>
        )
    }
}