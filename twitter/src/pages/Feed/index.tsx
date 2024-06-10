import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { LoadingSpinner, StyledPage } from "styled";
import { CreateTweet, TweetsList } from "components";
import { getTweetsQuery } from "store/sagas";
import { getTweets, resetTweets } from "store/slices";
import { useInfinityScroll } from "hooks";

export const Feed: FC = () => {
  const dispatch = useDispatch();

  const { tweets, total, error, isFetching } = useSelector(getTweets);

  const isLastPage = total <= tweets.length;

  const lastDoc = useInfinityScroll(tweets, isLastPage, isFetching);

  useEffect(() => {
    dispatch(getTweetsQuery(lastDoc));
  }, [dispatch, lastDoc]);

  useEffect(() => {
    return () => {
      dispatch(resetTweets());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledPage>
      <CreateTweet />
      <TweetsList tweets={tweets} error={error} />
      {isFetching && <LoadingSpinner />}
    </StyledPage>
  );
};
