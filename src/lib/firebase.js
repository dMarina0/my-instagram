import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {seedDatabase} from '../seed.js'


const config={
    apiKey: 'AIzaSyAdherOvHyINGjulQkLXPFnuWG_vhQh3a4',
    authDomain: 'my-instagram-761c0.firebaseapp.com',
    projectId: 'my-instagram-761c0',
    storageBucket: 'my-instagram-761c0.appspot.com',
    messagingSenderId: '735287711481',
    appId: '1:735287711481:web:f749e12b677ca191ce3428',
    measurementId: 'G-KJEWSKX80L'
}

const firebase = Firebase.initializeApp(config);

const FieldValue = firebase.firestore;


export {firebase, FieldValue};