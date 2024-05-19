import { FC } from "react";

import { P } from "styled/StyledComponents";
import { Post } from "types/post";

import { TwitterPost } from "..";

interface PostsContainerProps {
  posts: Post[];
  isFetching: boolean;
  error: null | string;
}
export const PostsContainer: FC<PostsContainerProps> = ({ posts, error, isFetching }) => {
  if (isFetching) return <P>Fetching...</P>;
  if (error) return <P>{error}</P>;

  return (
    <>
      {posts.map((post) => (
        <TwitterPost key={post.id} post={post} />
      ))}
    </>
  );
};
