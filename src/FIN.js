import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

export class FIN extends Component {
    render() {
        return (
            <div>
                <h1>Thank You!</h1>
                
                <Router>
                    <div>
                        <Link to="/westcampus"><button className="btn btn-primary">Previous Stop</button></Link>
                    </div>
                </Router>
            </div>
        )
    }
}