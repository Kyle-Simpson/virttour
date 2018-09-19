import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import firebase from 'firebase';

export class MGH extends Component {
    constructor(props) {
        super(props);
        this.state = {
            audioFile: "",
            stopLocation: "",
            stopName: ""
        }
    }

    componentWillMount() {
        // The way I source the stop name, location, and audio file will change once on the Admissions server
        let dbRef = firebase.database().ref('MGH');
        dbRef.on('value', (snapshot) => {
            let data = snapshot.val();
            this.setState({
                audioFile: data.audioFile,
                stopLocation: data.stopLocation,
                stopName: data.stopName
            })
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.stopName}</h1>
                <audio controls>
                    <source src="https://firebasestorage.googleapis.com/v0/b/virttour-2018.appspot.com/o/4%20Mary%20Gates%20Hall%20v6_mixdown_FNL.mp3?alt=media&token=016135fd-789f-4231-aaae-47a9e6730f88"></source>
                </audio>
                <Router>
                    <div>
                        <Link to="/SUZZtoMGH"><button className="btn btn-primary">Previous Stop</button></Link>
                        <Link to="/MGHtoDRUM"><button className="btn btn-primary">Next Stop</button></Link>
                    </div>
                </Router>
            </div>
        )
    }
}