// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAZ4-iNMKCBRZg0Q0npCJ4ZGSmoYc3Ejyc",
	authDomain: "cathy-loerzel.firebaseapp.com",
	projectId: "cathy-loerzel",
	storageBucket: "cathy-loerzel.appspot.com",
	messagingSenderId: "809879541909",
	appId: "1:809879541909:web:8f0377a9853f6a6972239c",
	measurementId: "G-LXNW98YM07",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth and get a reference
export const auth = getAuth(app);
export default app;
