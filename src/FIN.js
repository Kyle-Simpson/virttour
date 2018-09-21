import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

export class FIN extends Component {
    render() {
        return (
            <div>
                <h1 style={{'font-family':'HeaderFont', 'color':'white'}}>Thank You!</h1>
                
                <Router>
                    <div>
                        <Link to="/westcampus"><button className="btn btn-primary" style={{'font-family':'BodyFont'}}>Previous Stop</button></Link>
                    </div>
                </Router>
            </div>
        )
    }
}