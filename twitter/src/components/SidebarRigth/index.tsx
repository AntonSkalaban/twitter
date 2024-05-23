import { FC } from "react";
import { useSelector } from "react-redux";

import { H3 } from "styled/StyledComponents";
import { TweetsList } from "components/TweetsList";
import { UsersList } from "components/UsersList";
import { getSearchedTweets, getSearchedUsers } from "store/slices";
import { useGetPageName } from "hooks/index";
import { PageNamesEnum } from "types/paths";

import { Searchbar } from "../Searchbar";
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
