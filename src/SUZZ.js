import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

export class SUZZ extends Component {

    render() {
        return (
            <div>
                <h1 style={{'font-family':'HeaderFont', 'color':'white'}}>Suzzalo Library</h1>
                <audio controls controlsList="nodownload">
                    <source src="https://firebasestorage.googleapis.com/v0/b/virttour-2018.appspot.com/o/3%20Suzzallo%20Reading%20Room%20v4_mixdown_FNL.mp3?alt=media&token=daa0060e-38cb-44d3-b283-e750c20a9ce9"></source>
                </audio>
                <Router>
                    <div>
                        <Link to="/RStoSUZZ"><button className="btn btn-primary" style={{'font-family':'BodyFont'}}>Previous Stop</button></Link>
                        <Link to="/SUZZtoMGH"><button className="btn btn-primary" style={{'font-family':'BodyFont'}}>Next Stop</button></Link>
                    </div>
                </Router>
            </div>
        )
    }
}