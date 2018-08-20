import React, { Component } from 'react';
import firebase from 'firebase';

export class MakeStopsHelper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stopName: "",
            stopLocation: "",
            audioFile: ""
        }
    }

    // componentDidMount() {
    //     this.storageRef = firebase.storage().ref();
    // }

    handleSubmit() {
        console.log(this.state)
        let stopRef = firebase.database().ref("stops/");
        let newStop = {
            stopName: this.state.stopName,
            stopLocation: this.state.stopLocation,
            audioFile: this.state.audioFile
        }
        stopRef.push(newStop)
    }

    newName(event) {
        let name = event.target.value;
        this.setState({
            stopName: name
        })
    }

    newLocation(event) {
        let loc = event.target.value;
        this.setState({
            stopLocation: loc
        })
    }

    newFile(event) {
        let file = event.target.files[0];
        let name = event.target.files[0].name;
        let storageRef = firebase.storage().ref().child(name);
        console.log(storageRef)
        storageRef.put(file).then((snapshot) => {
            console.log(snapshot, 'made it');
            this.setState({
                audioFile: snapshot.downloadURL
            });
        });
    }

    render() {
        return (
            <div>
                <p>Stop Name</p>
                <input type="text" onChange={(event) => this.newName(event)}></input>

                <p>Stop Location</p>
                <input type="text" onChange={(event) => this.newLocation(event)}></input>

                <p>Audio File</p>
                <input type="file" accept="audio/*" onChange={(event) => this.newFile(event)}></input>

                <button onClick={() => this.handleSubmit()}>Submit</button>
            </div>
        )
    }
}

export default MakeStopsHelper;