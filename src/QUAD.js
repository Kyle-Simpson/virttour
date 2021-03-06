import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

export class QUAD extends Component {

    render() {
        return (
            <div>
                <h1 style={{'font-family':'HeaderFont', 'color':'white'}}>Liberal Arts QUADrangle</h1>
                <audio controls controlsList="nodownload">
                    <source src="https://firebasestorage.googleapis.com/v0/b/virttour-2018.appspot.com/o/9%20Quad%20v4_mixdown_FNL.mp3?alt=media&token=3cda97f3-01b7-4b40-bee6-f403307973ec"></source>
                </audio><br></br>
                <a href="https://firebasestorage.googleapis.com/v0/b/virttour-2018.appspot.com/o/9%20Quad%20v4_mixdown_FNL.mp3.txt?alt=media&token=905e5f59-6c24-49a9-b39d-7711d876bb32" style={{'font-family':'BodyFont', 'color':'white'}}><u>Captions</u></a>
                <Router>
                    <div>
                        <Link to="/WETtoQUAD"><button className="btn btn-primary" style={{'font-family':'BodyFont'}}>Previous Stop</button></Link>
                        <Link to="/QUADtoDEN"><button className="btn btn-primary" style={{'font-family':'BodyFont'}}>Next Stop</button></Link>
                    </div>
                </Router>
            </div>
        )
    }
}