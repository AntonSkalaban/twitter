export interface LikeButtonProps {
  userId: string;
  likedUsers: string[];
  hanldeLike: (value: string[]) => void;
}
