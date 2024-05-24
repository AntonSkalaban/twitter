import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";

import { db } from "constants/index";
import { Tweet, TweetResponce } from "types/index";

export class TweetApi {
  static async getTweet(id: string) {
    const docRef = doc(db, "posts", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) return docSnap.data() as TweetResponce;
  }

  static async getTweets(key?: keyof TweetResponce, value?: string) {
    const q = key
      ? query(collection(db, "posts"), where(key, "==", value), orderBy("createdAt", "desc"))
      : query(collection(db, "posts"), orderBy("createdAt", "desc"));

    const querySnapshot = await getDocs(q);

    const tweets = querySnapshot.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        }) as TweetResponce,
    );

    return tweets;
  }

  static async getTweetsWithImage() {
    const q = query(
      collection(db, "posts"),
      where("image", "!=", null),
      orderBy("createdAt", "asc"),
      limit(6),
    );

    const querySnapshot = await getDocs(q);

    const tweets = querySnapshot.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        }) as TweetResponce,
    );
    return tweets;
  }

  static async getSearchedTweets(value: string) {
    const q = query(
      collection(db, "posts"),
      where("title", ">=", value),
      where("title", "<=", value + "\uf8ff"),
      orderBy("createdAt", "desc"),
    );

    const querySnapshot = await getDocs(q);

    const tweets = querySnapshot.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        }) as TweetResponce,
    );

    return tweets;
  }

  static async addTweet(post: Omit<TweetResponce, "id">) {
    const responce = await addDoc(collection(db, "posts"), post);
    return responce.id;
  }

  static async updateTweet(postId: string, body: Partial<Tweet>) {
    const tweetsRef = doc(db, "posts", postId);

    await updateDoc(tweetsRef, body);
  }
}
