import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import firebase from 'firebase';

export class GW2 extends Component {
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
        let dbRef = firebase.database().ref('GW2');
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
                <h1 style={{'font-family':'HeaderFont'}}>{this.state.stopName}</h1>
                <audio controls controlsList="nodownload">
                    <source src="https://firebasestorage.googleapis.com/v0/b/virttour-2018.appspot.com/o/11%20GW%20Return%20V3_mixdown_FNL.mp3?alt=media&token=0e84a785-cfa9-4acd-a716-1d34e7b05906"></source>
                </audio>
                <Router>
                    <div>
                        <Link to="/DENtoGW2"><button className="btn btn-primary">Previous Stop</button></Link>
                        <Link to="/GW2toWC"><button className="btn btn-primary">Next Stop</button></Link>
                    </div>
                </Router>
            </div>
        )
    }
}