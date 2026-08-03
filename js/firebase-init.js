const firebaseConfig = {
  apiKey: "AIzaSyBcBzkZdeIX3d7jSV6vpSg8wb1EWz6DZRU",
  authDomain: "ehsan-wordduel.firebaseapp.com",
  projectId: "ehsan-wordduel",
  storageBucket: "ehsan-wordduel.firebasestorage.app",
  messagingSenderId: "159645049196",
  appId: "1:159645049196:web:5a166eacde81b738965349",
  measurementId: "G-DXR2KQQVWC"
};

firebase.initializeApp(firebaseConfig);
const firebaseAuth = firebase.auth();
const firestoreDb = firebase.firestore();
