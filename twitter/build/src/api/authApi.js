import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "constants/index";
export const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, provider);
    return user;
};
