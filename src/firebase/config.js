import * as firebase from 'firebase';
import firestore from 'firebase/firestore'


var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://whats-up-40286-default-rtdb.asia-southeast1.firebasedatabase.app"
});


const firebaseConfig = {
    apiKey: "AAAARSixi0c:APA91bHC8b1zif4HS6Fa-P9zR9l90uh5npYI7LY0WKNxswC_YsthM-g2TOX_JMQ51Q1FirHpl2gRDERac-4jKJ6XJjrOy62n8UxC3oE5epYlb0qsLn1k3dYDnElN693CKSTk81Zj4Wf_",
    authDomain: "https://whats-up-40286-default-rtdb.asia-southeast1.firebasedatabase.app",
    databaseURL: "https://whats-up-40286-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "whats-up-40286",
    storageBucket: "reactnativefirebase-00000.appspot.com",
    messagingSenderId: "297035467591",
    appId: "1:000000000000000:web:000000000000000"
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;