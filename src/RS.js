import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import firebase from 'firebase';

export class RS extends Component {
    constructor(props) {
        super(props);
        this.state = {
            audioFile: "",
            stopLocation: "",
            stopName: ""
        }
    }

    componentWillMount() {
        let dbRef = firebase.database().ref('RS');
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
                <audio controls>
                    <source src="https://firebasestorage.googleapis.com/v0/b/virttour-2018.appspot.com/o/2%20Red%20Square%20v7_mixdown_FNL.mp3?alt=media&token=444b68ec-4be9-468e-9280-9a71e9e07061"></source>
                </audio>
                <Router>
                    <div>
                        <Link to="/GWtoRS"><button className="btn btn-primary">Previous Stop</button></Link>
                        <Link to="/RStoSUZZ"><button className="btn btn-primary">Next Stop</button></Link>
                    </div>
                </Router>
            </div>
        )
    }
}