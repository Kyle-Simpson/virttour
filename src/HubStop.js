import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import firebase from 'firebase';


export class HubStop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            audioFile:"",
            stopLocation:"",
            stopName:""
        }
    }

    componentWillMount() {
        let dbRef = firebase.database().ref('1');
        dbRef.on('value', (snapshot) => {
            let data = snapshot.val();
            this.setState({
                audioFile: data.audioFile,
                stopLocation : data.stopLocation,
                stopName: data.stopName
            })
        })
    }

    render() {
        return(
            <div>
                <h1>{this.state.stopName}</h1>
                <audio controls>
                    <source src="https://firebasestorage.googleapis.com/v0/b/virttour-2018.appspot.com/o/1%20GW%20Statue%20-%20Intro%20v7_mixdown_FNL.mp3?alt=media&token=b3181829-8b66-485b-b8f1-6af6d97a5a0a"></source>
                </audio>
                <Router>
                    <Link to="/nextStop"><button className="btn btn-primary">Next Stop</button></Link>
                </Router>
            </div>
        );
    }
}

