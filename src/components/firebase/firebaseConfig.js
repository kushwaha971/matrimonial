import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyADLB1letQD2wrqRdWr3grNxTaJA6306G4",
  authDomain: "vtu-shaadi.firebaseapp.com",
  projectId: "vtu-shaadi",
  storageBucket: "vtu-shaadi.appspot.com",
  messagingSenderId: "608949678338",
  appId: "1:608949678338:web:b90df3a3b76ff82d04521b",
  measurementId: "G-XG46ZNL1PT",
};

const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);
export default app;
