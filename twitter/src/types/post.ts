export interface Post {
  id: string;
  userId: string;
  title: string;
  image: string | null;
  likedUsers: string[];
  createdAt: number;
}
