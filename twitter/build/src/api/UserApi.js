import { doc, getDoc, getDocs, limit, query, setDoc, updateDoc, where } from "firebase/firestore";
import { db } from "constants/index";
import { usersCollection } from "./constants";
import { getDocsData } from "./helpers";
export class UserApi {
    static async getUserDoc(userId) {
        const docRef = doc(db, "users", userId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists())
            return docSnap.data();
    }
    static async getSearchedUsers(value) {
        const q = query(usersCollection, where("name", ">=", value), where("name", "<=", value + "\uf8ff"));
        const querySnapshot = await getDocs(q);
        const users = getDocsData(querySnapshot.docs);
        return users;
    }
    static async getUsers(key, value) {
        const q = key
            ? query(usersCollection, where(key, "==", value), limit(20))
            : query(usersCollection, limit(2));
        const querySnapshot = await getDocs(q);
        const users = getDocsData(querySnapshot.docs);
        return users;
    }
    static async addUserDoc(user) {
        const docRef = doc(db, "users", user.id);
        await setDoc(docRef, user);
    }
    static async updateUserDoc(userId, body) {
        const docRef = doc(db, "users", userId);
        await updateDoc(docRef, body);
    }
}
