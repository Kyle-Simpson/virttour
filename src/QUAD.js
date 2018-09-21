import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import firebase from 'firebase';

export class QUAD extends Component {
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
        let dbRef = firebase.database().ref('QUAD');
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
                    <source src="https://firebasestorage.googleapis.com/v0/b/virttour-2018.appspot.com/o/9%20Quad%20v4_mixdown_FNL.mp3?alt=media&token=3cda97f3-01b7-4b40-bee6-f403307973ec"></source>
                </audio>
                <Router>
                    <div>
                        <Link to="/WETtoQUAD"><button className="btn btn-primary" style={{'font-family':'BodyFont'}}>Previous Stop</button></Link>
                        <Link to="/QUADtoDEN"><button className="btn btn-primary" style={{'font-family':'BodyFont'}}>Next Stop</button></Link>
                    </div>
                </Router>
            </div>
        )
    }
}