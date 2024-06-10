import { FC } from "react";
import { useSelector } from "react-redux";

import { H3 } from "styled/StyledComponents";
import { Searchbar, TweetsList, UsersList } from "components";
import { getSearchedTweets, getSearchedUsers } from "store/slices";
import { useGetPageName } from "hooks";
import { PageNamesEnum } from "types";

import { useGetRandomUsers } from "./hooks";
import { TweetsImages } from "./TweetsImages";
import { StyledSidebar, UsersContainer } from "./styled";

export const SidebarRight: FC = () => {
  const pageName = useGetPageName();

  const { tweets, isFetching: isTweetsFetching } = useSelector(getSearchedTweets);
  const { users: searchedUsers, isFetching: isSearchedUsersFetching } =
    useSelector(getSearchedUsers);
  const { users: randomUsers, isFetching: isRandomUsersFetching } = useGetRandomUsers();
  const isSearchPageOpen = pageName === PageNamesEnum.Search;

  return (
    <StyledSidebar>
      {!isSearchPageOpen && (
        <>
          <Searchbar />
          <TweetsList tweets={tweets} isFetching={isTweetsFetching} error={null} itemType="small" />
        </>
      )}

      {!tweets.length && <TweetsImages />}

      <UsersContainer>
        {!searchedUsers.length && <H3>Also like</H3>}
        <UsersList
          users={searchedUsers.length ? searchedUsers : randomUsers}
          isFetching={isSearchedUsersFetching ? isSearchedUsersFetching : isRandomUsersFetching}
          error={null}
        />
      </UsersContainer>
    </StyledSidebar>
  );
};
