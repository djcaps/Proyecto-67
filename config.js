import firebase from 'firebase';

// Agregar SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyB2XMNJgC4vArnHCKwC2nQ0-OdVPf64AsY",
  authDomain: "proyecto-67-daf12.firebaseapp.com",
  projectId: "proyecto-67-daf12",
  storageBucket: "proyecto-67-daf12.appspot.com",
  messagingSenderId: "712136837154",
  appId: "1:712136837154:web:2db531c483645f1ad1a27b"
};
// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
