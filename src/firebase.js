import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBsOZ-fmEKNlLYeT7gthYgTCPDQqapc4Co",
    authDomain: "whatsapp-clone-a3762.firebaseapp.com",
    projectId: "whatsapp-clone-a3762",
    storageBucket: "whatsapp-clone-a3762.appspot.com",
    messagingSenderId: "13973309888",
    appId: "1:13973309888:web:56165da6d2146c8859e025",
    measurementId: "G-N2TVM0W2VS"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider }
  export default  db 