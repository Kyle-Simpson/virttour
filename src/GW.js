import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import firebase from 'firebase';


export class GW extends Component {
    constructor(props) {
        super(props);
        this.state = {
            audioFile: "",
            stopLocation: "",
            stopName: ""
        }
    }

    componentWillMount() {
        let dbRef = firebase.database().ref('GW');
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
                <h1 style={{'font-family':'HeaderFont', 'color':'white'}}>{this.state.stopName}</h1>
                <audio controls controlsList="nodownload">
                    <source src="https://firebasestorage.googleapis.com/v0/b/virttour-2018.appspot.com/o/1%20GW%20Statue%20-%20Intro%20v7_mixdown_FNL.mp3?alt=media&token=7b80ad12-648d-4f1e-a397-33a3f01d89e0"></source>
                </audio>
                <Router>
                    <div>
                        <Link to="/"><button className="btn btn-primary" style={{'font-family':'BodyFont'}}>Back to Intro</button></Link>
                        <Link to="/GWtoRS"><button className="btn btn-primary" style={{'font-family':'BodyFont'}}>Next Stop</button></Link>
                    </div>
                </Router>
            </div>
        );
    }
}

