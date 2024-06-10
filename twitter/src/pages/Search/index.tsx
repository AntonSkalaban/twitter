import { FC } from "react";
import { useSelector } from "react-redux";

import { StyledPage } from "styled";
import { Searchbar, TweetsList } from "components";
import { getSearchedTweets } from "store/slices";

export const Search: FC = () => {
  const { tweets, isFetching, error } = useSelector(getSearchedTweets);

  return (
    <StyledPage>
      {" "}
      <Searchbar />
      <TweetsList tweets={tweets} isFetching={isFetching} error={error} />
      <div></div>
    </StyledPage>
  );
};
