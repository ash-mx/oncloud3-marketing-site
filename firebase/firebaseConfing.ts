import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVspfOwJHFmxHPUrxRkdCVN6tja8gdVnA",
  authDomain: "oncloud-marketing.firebaseapp.com",
  projectId: "oncloud-marketing",
  storageBucket: "oncloud-marketing.appspot.com",
  messagingSenderId: "934599339833",
  appId: "1:934599339833:web:60838cdddd4caa706482e8",
  measurementId: "G-KD9H4J7FEN",
};

const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const db = getFirestore(app);
