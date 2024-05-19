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

// export class UserApi {
//   static async updateUser(userId: string, body: Partial<User>): Promise<void> {
//     const postsRef = doc(db, "users", userId);
//     await updateDoc(postsRef, body);
//   }
// }

export class UserApi {
  static async getUserDoc(userId: string) {
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) return docSnap.data() as User;
  }

  static async addUserDoc(user: User): Promise<void> {
    const docRef = doc(db, "users", user.id);
    await setDoc(docRef, user);
  }

  static async updateUserDoc(userId: string, body: Partial<User>): Promise<void> {
    const docRef = doc(db, "users", userId);
    await updateDoc(docRef, body);
  }

  // static async findUserDoc(userId: string) {
  //   const docRef = doc(db, "users", userId);
  //   const docSnap = await getDoc(docRef);

  //   if (docSnap.exists()) return docSnap.data() as User;
  // }
}

export const addUserToFirestore = async (user: User) => {
  await setDoc(doc(db, "users", user.id), user);
};

export const getUser = async (userId: string) => {
  const docRef = doc(db, "users", userId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) return docSnap.data() as User;
};

export const getUserByField = async (key: keyof User, value: string) => {
  const q = query(collection(db, "users"), where(key, "==", value));

  const querySnapshot = await getDocs(q);
  const posts = querySnapshot.docs.map((doc) => ({
    ...(doc.data() as User),
  }))[0];
  return posts;
};
