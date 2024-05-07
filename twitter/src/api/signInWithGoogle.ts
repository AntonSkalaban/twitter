import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "constants/index";

import { addUser } from "./fireStoreApi";

export const getUser = async (userId: string) => {
  const docRef = doc(db, "users", userId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) docSnap.data();
};

export const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, provider);

    if (!getUser) addUser({ id: user.uid, name: user.displayName || "", email: user.email || "" });

    return user;
  } catch (e) {
    console.log(e);
  }
};
