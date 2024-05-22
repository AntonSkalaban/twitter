import { Tweet } from "types/index";

export interface TweetsListProps {
  size?: "small" | "big";
  tweets: Tweet[];
  isFetching: boolean;
  error: null | string;
}
