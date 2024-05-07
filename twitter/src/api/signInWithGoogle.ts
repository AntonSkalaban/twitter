import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "constants/index";

export const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    return user;
  } catch (e) {
    console.log(e);
  }
};