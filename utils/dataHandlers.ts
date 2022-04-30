import { collection, getDocs, addDoc, doc } from "firebase/firestore";

// Firebase config file
import { db } from "../firebase/firebaseConfing";

// Collection Name
const waitList = "waiting-list";

// Read firebase data
export const readData = async () => {
  const querySnapshot = await getDocs(collection(db, waitList));
  querySnapshot.forEach((doc) => {
    console.log(doc.id, doc.data().email);
  });
};

// Write firebase data
export const addData = async (emailAddress: string) => {
  try {
    const docRef = await addDoc(collection(db, waitList), {
      email: emailAddress,
    });

    console.log("Email added: ", docRef.id);
  } catch (e) {
    console.log("Error adding email: ", e);
  }
};
