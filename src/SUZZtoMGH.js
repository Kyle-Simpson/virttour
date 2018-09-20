import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import "./SUZZtoMGH.css";

export class SUZZtoMGH extends Component {
    render() {
        return (
            <div className="imgbox">
                <img className="center-fit" src="https://firebasestorage.googleapis.com/v0/b/virttour-2018.appspot.com/o/SUZZtoMGH.png?alt=media&token=ea72887c-85e0-4fb6-9a94-b528f95155b4" alt="map"></img>

                <Router>
                    <div className="buttonFloat">
                        <Link to="/suzzalo"><button className="btn btn-primary">Previous Stop</button></Link>
                        <Link to="/marygates"><button className="btn btn-primary">Continue</button></Link>
                    </div>
                </Router>
            </div>
        )
    }
}