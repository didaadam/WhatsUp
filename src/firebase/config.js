// firebase.js
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore';
import '@react-native-firebase/storage';
// const fire = null
// if (!firebase.apps.length) {
  // export const firebases = firebase.initializeApp({
  //   apiKey: "AIzaSyCO-3MNLqR5LveV9E0UguizxH0VA5vPwCs",
  //   authDomain: "whats-up-40286.firebaseapp.com",
  //   databaseURL: "https://whats-up-40286-default-rtdb.asia-southeast1.firebasedatabase.app",
  //   projectId: "whats-up-40286",
  //   storageBucket: "whats-up-40286.appspot.com",
  //   messagingSenderId: "297035467591",
  //   appId: "1:297035467591:web:edb00a46356d95123c5a62",
  //   measurementId: "G-RFPHYPZH7Y"
  // });
// }else {
  // const fire = firebase.app({
  //   apiKey: "AIzaSyCO-3MNLqR5LveV9E0UguizxH0VA5vPwCs",
  //   authDomain: "whats-up-40286.firebaseapp.com",
  //   databaseURL: "https://whats-up-40286-default-rtdb.asia-southeast1.firebasedatabase.app",
  //   projectId: "whats-up-40286",
  //   storageBucket: "whats-up-40286.appspot.com",
  //   messagingSenderId: "297035467591",
  //   appId: "1:297035467591:web:edb00a46356d95123c5a62",
  //   measurementId: "G-RFPHYPZH7Y"
  // })
// }


// export const auth = fire.auth();
// export const db = fire.firestore();
// export default {
//   firebases,
// };

const config = {
  apiKey: "AIzaSyCO-3MNLqR5LveV9E0UguizxH0VA5vPwCs",
    authDomain: "whats-up-40286.firebaseapp.com",
    databaseURL: "https://whats-up-40286-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "whats-up-40286",
    storageBucket: "whats-up-40286.appspot.com",
    messagingSenderId: "297035467591",
    appId: "1:297035467591:web:edb00a46356d95123c5a62",
    measurementId: "G-RFPHYPZH7Y"
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
} else {
  firebase.app(config)
}

export default firebase