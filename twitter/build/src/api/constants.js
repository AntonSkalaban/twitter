import { collection } from "firebase/firestore";
import { db } from "constants/index";
export const tweetsCollection = collection(db, "posts");
export const usersCollection = collection(db, "users");
