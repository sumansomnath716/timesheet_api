const firebase = require('firebase');
// const { initializeApp } = require('firebase/app');
// import firebase from 'firebase'
const config = require('./config');

const db = firebase.initializeApp(config.firebase_config);

module.exports = db;