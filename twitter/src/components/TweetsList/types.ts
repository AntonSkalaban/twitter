import { Tweet } from "types/index";

export interface ItemsListProps {
  itemType?: "big" | "small";
  tweets: Tweet[];
  isFetching?: boolean;
  error: null | string;
}
