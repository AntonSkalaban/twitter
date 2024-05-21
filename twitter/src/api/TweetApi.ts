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
    const querySnapshot = await getDocs(
      key
        ? query(collection(db, "posts"), where(key, "==", value), orderBy("createdAt", "desc"))
        : query(collection(db, "posts"), orderBy("createdAt", "desc")),
    );

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
    const querySnapshot = await getDocs(
      query(
        collection(db, "posts"),
        // where("image", "!=", null),
        orderBy("createdAt", "desc"),
        // limit(6),
        limit(100),
      ),
    );

    const tweets = querySnapshot.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        }) as TweetResponce,
    );

    return tweets.filter(({ image }) => image).slice(0, 6);
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
