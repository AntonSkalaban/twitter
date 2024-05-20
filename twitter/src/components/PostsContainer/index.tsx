import { FC } from "react";

import { P } from "styled/StyledComponents";
import { Tweet } from "types/index";

import { TweetPost } from "..";

interface PostsContainerProps {
  tweets: Tweet[];
  isFetching: boolean;
  error: null | string;
}
export const PostsContainer: FC<PostsContainerProps> = ({ tweets, error, isFetching }) => {
  if (isFetching) return <P>Fetching...</P>;
  if (error) return <P>{error}</P>;

  return (
    <>
      {tweets.map((tweet) => (
        <TweetPost key={tweet.id} tweet={tweet} />
      ))}
    </>
  );
};
