import { FC } from "react";

import { P } from "styled/StyledComponents";

import { components } from "./constants";
import { TweetsListProps } from "./types";

export const TweetsList: FC<TweetsListProps> = ({ size = "big", tweets, error, isFetching }) => {
  if (isFetching) return <P>Fetching...</P>;
  if (error) return <P>{error}</P>;

  return tweets.map((tweet) => components[size](tweet));
};
