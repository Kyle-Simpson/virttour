import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import firebase from 'firebase';

export class WET extends Component {
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
        let dbRef = firebase.database().ref('WET');
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
                    <source src="https://firebasestorage.googleapis.com/v0/b/virttour-2018.appspot.com/o/8%20W%C7%9D%C9%AB%C7%9Db%CA%94altx%CA%B7%20v7_mixdown_FNL.mp3?alt=media&token=d5bca68d-d31e-46f0-b2ce-50898c6bc7a9"></source>
                </audio>
                <Router>
                    <div>
                        <Link to="/HUBtoWET"><button className="btn btn-primary">Previous Stop</button></Link>
                        <Link to="/WETtoQUAD"><button className="btn btn-primary">Next Stop</button></Link>
                    </div>
                </Router>
            </div>
        )
    }
}