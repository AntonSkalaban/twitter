import { ref, set } from "@firebase/database";
import { database } from "constants/index";

export const setPost = (userId: string) => {
  set(ref(database, "posts/"), {
    userId: userId,
  });
};
