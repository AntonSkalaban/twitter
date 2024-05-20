import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";

import { db } from "constants/index";
import { User } from "types";

export class UserApi {
  static async getUserDoc(userId: string) {
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) return docSnap.data() as User;
  }

  static async getUsersDoc(key: keyof User, value: string) {
    const q = query(collection(db, "users"), where(key, "==", value));

    const querySnapshot = await getDocs(q);
    const users: User[] = [];

    querySnapshot.forEach((doc) => {
      users.push(doc.data() as User);
    });

    return users;
  }

  static async addUserDoc(user: User): Promise<void> {
    const docRef = doc(db, "users", user.id);
    await setDoc(docRef, user);
  }

  static async updateUserDoc(userId: string, body: Partial<User>): Promise<void> {
    const docRef = doc(db, "users", userId);
    await updateDoc(docRef, body);
  }
}
