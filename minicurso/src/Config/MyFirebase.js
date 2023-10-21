import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBjchaXm0Y55eKxCaidZOOfycr96XZDraE",
    authDomain: "teste-c75a5.firebaseapp.com",
    projectId: "teste-c75a5",
    storageBucket: "teste-c75a5.appspot.com",
    messagingSenderId: "538496252645",
    appId: "1:538496252645:web:c282815ed7d0053d0e720c",
    measurementId: "G-7YHRHNZ1XJ"
}
firebase.initializeApp(config)
firebase.firestore().settings({
    timestampsInSnapshots: true
})

export const myFirebase = firebase
export const myFirestore = firebase.firestore()
export const myStorage = firebase.storage()
