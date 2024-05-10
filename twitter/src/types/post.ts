export interface Post {
  id: string;
  userId: string;
  title: string;
  image: string | null;
  date: string;
  likedUsers: string[];
}
