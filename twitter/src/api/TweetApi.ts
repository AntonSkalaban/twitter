import {
  addDoc,
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";

import { db } from "constants/index";
import { Tweet, TweetResponce } from "types/index";

export class TweetApi {
  static async getTweets(userId?: string) {
    const q = query(
      collection(db, "posts"),
      userId
        ? (where("userId", "==", userId), orderBy("createdAt", "desc"))
        : orderBy("createdAt", "desc"),
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
