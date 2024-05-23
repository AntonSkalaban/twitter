import { FC, Fragment } from "react";

import { P } from "styled/StyledComponents";

import { components } from "./constants";
import { ItemsListProps } from "./types";

export const TweetsList: FC<ItemsListProps> = ({ itemType = "big", tweets, error, isFetching }) => {
  if (isFetching) return <P>Fetching...</P>;
  if (error) return <P>{error}</P>;

  return (
    <div>
      {tweets.map((tweet) => (
        <Fragment key={tweet.id}>{components[itemType](tweet)}</Fragment>
      ))}
    </div>
  );
};
