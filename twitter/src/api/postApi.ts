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
import { Post } from "types/index";

export const createPost = async (post: Omit<Post, "id">) => {
  const responce = await addDoc(collection(db, "posts"), post);
  return responce.id;
};

export const getPosts = async () => {
  const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));

  const querySnapshot = await getDocs(q);
  const posts: Post[] = querySnapshot.docs.map(
    (doc) =>
      ({
        id: doc.id,
        ...doc.data(),
      }) as Post,
  );
  return posts;
};

export const getUserPosts = async (userId: string) => {
  const q = query(
    collection(db, "posts"),

    where("userId", "==", userId),
    orderBy("createdAt", "desc"),
  );

  const querySnapshot = await getDocs(q);
  const posts = querySnapshot.docs.map(
    (doc) =>
      ({
        id: doc.id,
        ...doc.data(),
      }) as Post,
  );
  return posts;
};

export const updatePost = async (postId: string, body: Partial<Post>) => {
  const postsRef = doc(db, "posts", postId);

  await updateDoc(postsRef, body);
};
