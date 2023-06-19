import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCT5ShUapijXOHAS5if6WpmWUTc2lu06L8",
    authDomain: "firechat-cb4b1.firebaseapp.com",
    projectId: "firechat-cb4b1",
    storageBucket: "firechat-cb4b1.appspot.com",
    messagingSenderId: "66186756451",
    appId: "1:66186756451:web:35da0b0a2379fe72665356",
    measurementId: "G-NKD63E675G"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }