import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBaIGmwTyYzj7ByD6NIuiaFOtTiH5zmaic",
    authDomain: "virttour-2018.firebaseapp.com",
    databaseURL: "https://virttour-2018.firebaseio.com",
    projectId: "virttour-2018",
    storageBucket: "virttour-2018.appspot.com",
    messagingSenderId: "952053430785"
  };
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
