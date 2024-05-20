export interface TweetResponce {
  id: string;
  userId: string;
  title: string;
  image: string | null;
  likedUsers: string[];
  createdAt: number;
}

export interface Tweet extends TweetResponce {
  userName: string;
  userImg: string | null;
}
