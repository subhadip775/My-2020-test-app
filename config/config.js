const admin = require ("firebase-admin")

const firebase = require("firebase")

const firebaseConfig = {
  apiKey: "AIzaSyAFWYt8VtFOYsnO9kPUl475PGMD9ntxOa4",
  authDomain: "test-web-77597.firebaseapp.com",
  databaseURL: "https://test-web-77597.firebaseio.com",
  projectId: "test-web-77597",
  storageBucket: "test-web-77597.appspot.com",
  messagingSenderId: "682475931274",
  appId: "1:682475931274:web:59370f77e960cc739acf73"
};
firebase.initializeApp(firebaseConfig)
admin.initializeApp(firebaseConfig)

module.exports = { admin, firebase }