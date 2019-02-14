import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from '@firebase/app';
import '@firebase/auth';
import { alreadyLogin, notLoginYet } from '../actions'
import Main from './Main';



class AppInit extends Component {

  componentDidMount() {
    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAuqpFNx1MuJIztfnJBwb5WCfJPvq6qI6Q",
    authDomain: "ujian-mobile-172d8.firebaseapp.com",
    databaseURL: "https://ujian-mobile-172d8.firebaseio.com",
    projectId: "ujian-mobile-172d8",
    storageBucket: "ujian-mobile-172d8.appspot.com",
    messagingSenderId: "80671437197"
  };
  firebase.initializeApp(config);
      
    firebase.auth().onAuthStateChanged((user) => {
        if(user) {
            this.props.alreadyLogin(user);
        }
        else {
            this.props.notLoginYet();
        }
    });
  }

  render() {
    return(
          <Main />
    );
  }
}



export default connect(null, { alreadyLogin, notLoginYet })(AppInit);
