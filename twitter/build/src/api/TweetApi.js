import { addDoc, doc, getCountFromServer, getDoc, getDocs, limit, orderBy, query, startAfter, updateDoc, where, } from "firebase/firestore";
import { db } from "constants/index";
import { tweetsCollection } from "./constants";
import { getDocsData } from "./helpers";
export class TweetApi {
    static async getTweet(id) {
        const docRef = doc(db, "posts", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists())
            return docSnap.data();
    }
    static async getTweets(lastTweet, key, value) {
        const constraints = [orderBy("createdAt", "desc")];
        if (key)
            constraints.unshift(where(key, "==", value));
        if (lastTweet)
            constraints.push(startAfter(lastTweet));
        const q = query(tweetsCollection, ...constraints, limit(5));
        const total = (await getCountFromServer(query(tweetsCollection, ...constraints))).data().count;
        const querySnapshot = await getDocs(q);
        const tweets = getDocsData(querySnapshot.docs);
        return { tweets, total };
    }
    static async getTweetsWithImage() {
        const q = query(tweetsCollection, where("image", "!=", null), orderBy("createdAt", "asc"), limit(6));
        const querySnapshot = await getDocs(q);
        const tweets = getDocsData(querySnapshot.docs);
        return tweets;
    }
    static async getSearchedTweets(value, lastTweet) {
        const constraints = [
            where("title", ">=", value),
            where("title", "<=", value + "\uf8ff"),
            orderBy("createdAt", "desc"),
        ];
        if (lastTweet)
            constraints.push(startAfter(lastTweet));
        const q = query(tweetsCollection, ...constraints, limit(5));
        const querySnapshot = await getDocs(q);
        const tweets = getDocsData(querySnapshot.docs);
        const total = (await getCountFromServer(query(tweetsCollection, ...constraints))).data().count;
        return { tweets, total };
    }
    static async addTweet(post) {
        const responce = await addDoc(tweetsCollection, post);
        return responce.id;
    }
    static async updateTweet(postId, body) {
        const tweetsRef = doc(db, "posts", postId);
        await updateDoc(tweetsRef, body);
    }
}
