// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import {
  getAuth,
  updateProfile,
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
// firestore
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  onSnapshot,
  deleteDoc,
  updateDoc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALx7QCh43uZDTc1BVJGLUhz0iCscdp8PE",
  authDomain: "red-social-2543b.firebaseapp.com",
  projectId: "red-social-2543b",
  storageBucket: "red-social-2543b.appspot.com",
  messagingSenderId: "789674687356",
  appId: "1:789674687356:web:15b2e3af8359640f4b42f9",
};

// Initialize Firebase y se exporta la app
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Autenticacion and get a reference to the service
export const auth = getAuth(app);
// initialize Firestore
export const db = getFirestore();

// Opreciones CRUD

export const createTask = (
  title,
  description,
  userName,
  userImage,
  userEmail
) => {
  addDoc(collection(db, "tasks"), {
    title,
    description,
    userName,
    userImage,
    userEmail,
    userFecha: new Date().toLocaleString(),
  });
};

export const onGetTask = (callback) =>
  onSnapshot(collection(db, "tasks"), callback);

export const getTask = (id) => getDoc(doc(db, "tasks", id));
export const updateTask = (id, newData) =>
  updateDoc(doc(db, "tasks", id), newData);

export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));
export { updateProfile };
