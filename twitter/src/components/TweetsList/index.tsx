import { FC, Fragment } from "react";

import { P } from "styled/StyledComponents";

import { components } from "./constants";
import { TweetsListProps } from "./types";

export const TweetsList: FC<TweetsListProps> = ({ size = "big", tweets, error, isFetching }) => {
  if (isFetching) return <P>Fetching...</P>;
  if (error) return <P>{error}</P>;

  return (
    <div>
      {tweets.map((tweet) => (
        <Fragment key={tweet.id}>{components[size](tweet)}</Fragment>
      ))}
    </div>
  );
};
