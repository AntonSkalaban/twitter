import { Tweet } from "types";

export interface ItemsListProps {
  itemType?: "big" | "small";
  tweets: Tweet[];
  isFetching?: boolean;
  error: null | string;
}
