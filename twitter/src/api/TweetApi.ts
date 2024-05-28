import {
  addDoc,
  doc,
  getCountFromServer,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  QueryConstraint,
  startAfter,
  updateDoc,
  where,
} from "firebase/firestore";

import { db } from "constants/index";
import { Tweet, TweetResponce } from "types/index";

import { tweetsCollection } from "./constants";
import { getDocsData } from "./helpers";

export class TweetApi {
  static async getTweet(id: string) {
    const docRef = doc(db, "posts", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) return docSnap.data() as TweetResponce;
  }

  static async getTweets(lastTweet: number | null, key?: keyof TweetResponce, value?: string) {
    const constraints: QueryConstraint[] = [orderBy("createdAt", "desc")];

    if (key) constraints.unshift(where(key, "==", value));
    if (lastTweet) constraints.push(startAfter(lastTweet));

    const q = query(tweetsCollection, ...constraints, limit(5));

    const total = (await getCountFromServer(query(tweetsCollection, ...constraints))).data().count;

    const querySnapshot = await getDocs(q);

    const tweets = getDocsData<TweetResponce>(querySnapshot.docs);

    return { tweets, total };
  }

  static async getTweetsWithImage() {
    const q = query(
      tweetsCollection,
      where("image", "!=", null),
      orderBy("createdAt", "asc"),
      limit(6),
    );

    const querySnapshot = await getDocs(q);

    const tweets = getDocsData<TweetResponce>(querySnapshot.docs);

    return tweets;
  }

  static async getSearchedTweets(value: string, lastTweet: number | null) {
    const constraints: QueryConstraint[] = [
      where("title", ">=", value),
      where("title", "<=", value + "\uf8ff"),
      orderBy("createdAt", "desc"),
    ];

    if (lastTweet) constraints.push(startAfter(lastTweet));

    const q = query(tweetsCollection, ...constraints, limit(5));

    const querySnapshot = await getDocs(q);

    const tweets = getDocsData<TweetResponce>(querySnapshot.docs);
    const total = (await getCountFromServer(query(tweetsCollection, ...constraints))).data().count;

    return { tweets, total };
  }

  static async addTweet(post: Omit<TweetResponce, "id">) {
    const responce = await addDoc(tweetsCollection, post);
    return responce.id;
  }

  static async updateTweet(postId: string, body: Partial<Tweet>) {
    const tweetsRef = doc(db, "posts", postId);

    await updateDoc(tweetsRef, body);
  }
}
