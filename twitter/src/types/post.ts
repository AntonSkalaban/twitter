export interface Post {
  id: string;
  userId: string;
  title: string;
  image: string | null;
  likes: number;
  date: string;
  likedUsers: string[];
}
