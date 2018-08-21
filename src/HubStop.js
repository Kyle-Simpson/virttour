import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';


export class HubStop extends Component {
    render() {
        return(
            <div>
                <h1>Husky Union Building</h1>
                <audio controls>
                    <source src="https://firebasestorage.googleapis.com/v0/b/virttour-2018.appspot.com/o/6.-%20The%20Ecstasy%20(Jupiter).mp3?alt=media&token=89d6bc22-3ee0-4505-adc8-6c1b5fb74377"></source>
                </audio>
                <Router>
                    <Link to="/nextStop"><button className="btn btn-primary">Next Stop</button></Link>
                </Router>
            </div>
        );
    }
}

