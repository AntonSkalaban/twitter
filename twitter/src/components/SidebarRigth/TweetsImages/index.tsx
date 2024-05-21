import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { useTweetsWithImageQuery } from "./hooks";
import { TweetImage, TweetsImagesContainer } from "./styled";

export const TweetsImages: FC = () => {
  const navigate = useNavigate();

  const { tweets, isFetching, error } = useTweetsWithImageQuery();

  const hanldeClick = (id: string) => () => {
    navigate(`/feed/${id}`);
  };

  if (isFetching) return <p>Fetching...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <TweetsImagesContainer>
      {tweets.map(({ id, image }) => {
        return <TweetImage key={id} $image={image || ""} onClick={hanldeClick(id)} />;
      })}
    </TweetsImagesContainer>
  );
};
