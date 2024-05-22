import { FC } from "react";
import { useParams } from "react-router-dom";

import { TweetBig } from "components/index";

import { useTweetQuery } from "./hook";

export const TweetPage: FC = () => {
  const { id } = useParams();

  const { tweet, isFetching, error } = useTweetQuery(id);

  if (isFetching) return <p>Fetching...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!tweet) return <p>Tweet not found</p>;

  return (
    <main style={{ maxWidth: "920px" }}>
      <TweetBig tweet={tweet} />
    </main>
  );
};
