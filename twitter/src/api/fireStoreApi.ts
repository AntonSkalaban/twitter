import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "constants/index";
import { Post, User } from "types";

export const addUser = async (user: User) => {
  try {
    await setDoc(doc(db, "users", user.id), user);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const createPost = async (post: Omit<Post, "id">) => {
  try {
    await addDoc(collection(db, "posts"), post);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getPosts = async () => {
  const querySnapshot = await getDocs(collection(db, "posts"));
  const posts: Post[] = querySnapshot.docs.map(
    (doc) =>
      ({
        id: doc.id,
        ...doc.data(),
      }) as Post,
  );
  return posts;
};

export const updatePost = async (
  postId: string,
  body: { [x: string]: string | number | string[] },
) => {
  const postsRef = doc(db, "posts", postId);

  await updateDoc(postsRef, body);
};

export const getUserPosts = async (userId: string) => {
  const q = query(collection(db, "posts"), where("userId", "==", userId));

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

export const getUserByField = async (key: keyof User, value: string) => {
  const q = query(collection(db, "users"), where(key, "==", value));

  const querySnapshot = await getDocs(q);
  const posts = querySnapshot.docs.map((doc) => ({
    ...(doc.data() as User),
  }))[0];
  return posts;
};
