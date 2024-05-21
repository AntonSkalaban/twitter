import { FC } from "react";

import { P } from "styled/StyledComponents";
import { TweetPreview } from "components/TweetPreview";
import { Tweet } from "types/index";

import { TweetPost } from "..";

interface PostsContainerProps {
  size?: "small" | "big";
  tweets: Tweet[];
  isFetching: boolean;
  error: null | string;
}
export const PostsContainer: FC<PostsContainerProps> = ({
  size = "big",
  tweets,
  error,
  isFetching,
}) => {
  if (isFetching) return <P>Fetching...</P>;
  if (error) return <P>{error}</P>;

  return (
    <>
      {tweets.map((tweet) =>
        size === "big" ? (
          <TweetPost key={tweet.id} tweet={tweet} />
        ) : (
          <TweetPreview key={tweet.id} tweet={tweet} />
        ),
      )}
    </>
  );
};
