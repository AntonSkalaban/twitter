import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { auth } from "constants/index";

import { getUser } from "./userApi";

export const getUserFromFirestore = async (userId: string) => await getUser(userId);

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const { user } = await signInWithPopup(auth, provider);

  return user;
};
