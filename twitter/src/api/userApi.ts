import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
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

  static async getSearchedUsers(value: string) {
    const q = query(
      collection(db, "users"),
      where("name", ">=", value),
      where("name", "<=", value + "\uf8ff"),
    );

    const querySnapshot = await getDocs(q);

    const users = querySnapshot.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        }) as User,
    );

    return users;
  }

  static async getUsers(key?: keyof User, value?: string) {
    const q = key
      ? query(collection(db, "users"), where(key, "==", value), limit(20))
      : query(collection(db, "users"), limit(2));

    const querySnapshot = await getDocs(q);

    const users = querySnapshot.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        }) as User,
    );

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
