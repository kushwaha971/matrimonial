import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBryCGoAQiOpSIqZD4ICYq4SaBoS4obHwg",
  authDomain: "vtu-shaadi-8e279.firebaseapp.com",
  projectId: "vtu-shaadi-8e279",
  storageBucket: "vtu-shaadi-8e279.appspot.com",
  messagingSenderId: "554686195198",
  appId: "1:554686195198:web:31047b0afbb6ecb04a8caf",
  measurementId: "G-XPKW16JVB6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
