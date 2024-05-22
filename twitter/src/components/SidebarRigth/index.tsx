import { FC } from "react";
import { useSelector } from "react-redux";

import { TweetsList } from "components/TweetsList";
import { getSearchedTweets } from "store/slices";

import { Searchbar } from "./Searchbar";
import { TweetsImages } from "./TweetsImages";
import { StyledSidebar } from "./styled";

export const SidebarRight: FC = () => {
  const { tweets, isFetching } = useSelector(getSearchedTweets);

  return (
    <StyledSidebar>
      <Searchbar />
      <TweetsList tweets={tweets} isFetching={isFetching} error={null} size="small" />
      {!tweets.length && <TweetsImages />}
    </StyledSidebar>
  );
};
