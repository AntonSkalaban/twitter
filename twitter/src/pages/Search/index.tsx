import { FC } from "react";
import { useSelector } from "react-redux";

import { StyledPage } from "styled/index";
import { Searchbar } from "components/Searchbar";
import { TweetsList } from "components/TweetsList";
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
