import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { StyledPage } from "styled/index";
import { CreateTweet } from "components/CreateTweet";
import { TweetsList } from "components/TweetsList";
import { getTweetsQuery } from "store/sagas";
import { getTweets } from "store/slices";

export const Feed: FC = () => {
  const dispatch = useDispatch();
  const { tweets, error, isFetching } = useSelector(getTweets);

  useEffect(() => {
    dispatch(getTweetsQuery());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <StyledPage>
      {" "}
      <CreateTweet />
      <TweetsList tweets={tweets} isFetching={isFetching} error={error} />
    </StyledPage>
  );
};
