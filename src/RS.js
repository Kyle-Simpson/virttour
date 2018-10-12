import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

export class RS extends Component {

    render() {
        return (
            <div>
                <h1 style={{'font-family':'HeaderFont', 'color':'white'}}>Red Square</h1>
                <audio controls controlsList="nodownload">
                    <source src="https://firebasestorage.googleapis.com/v0/b/virttour-2018.appspot.com/o/2%20Red%20Square%20v7_mixdown_FNL.mp3?alt=media&token=444b68ec-4be9-468e-9280-9a71e9e07061"></source>
                </audio> <br></br>
                <a href="https://firebasestorage.googleapis.com/v0/b/virttour-2018.appspot.com/o/2%20Red%20Square%20v7_mixdown_FNL.mp3.txt?alt=media&token=5855b45e-0ab1-4459-85aa-716b6a244f2d" style={{'font-family':'BodyFont', 'color':'white'}}><u>Captions</u></a>
                <Router>
                    <div>
                        <Link to="/GWtoRS"><button className="btn btn-primary" style={{'font-family':'BodyFont'}}>Previous Stop</button></Link>
                        <Link to="/RStoSUZZ"><button className="btn btn-primary" style={{'font-family':'BodyFont'}}>Next Stop</button></Link>
                    </div>
                </Router>
            </div>
        )
    }
}