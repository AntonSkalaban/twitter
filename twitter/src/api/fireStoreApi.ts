import { doc, setDoc } from "firebase/firestore";
import { db } from "constants/index";
import { User } from "types/user";

export const addUser = async (user: User) => {
  try {
    await setDoc(doc(db, "users", user.id), user);
    console.log("Document written with ID: " + user.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
