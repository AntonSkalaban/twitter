import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FlexRow, H5, LinkGrey, LoadingSpinner, P, StyledPage } from "styled";
import { CreateTweet, EditProfile, Modal, TweetsList } from "components";
import { getUserTweetsQuery } from "store/sagas";
import { getUserTweets, resetUserTweets } from "store/slices";
import { useInfinityScroll } from "hooks";

import { ProfileProps } from "./types";
import {
  EditButton,
  ImageContainer,
  TweetsTitle,
  UserImgContainer,
  UserInfoContainer,
  UserPhoto,
} from "./styled";

export const Profile: FC<ProfileProps> = ({ user, isCurrentUser }) => {
  const dispatch = useDispatch();

  const { tweets, total, isFetching } = useSelector(getUserTweets);

  const { id, name, email, image } = user;

  const isLastPage = total <= tweets.length;

  const lastDoc = useInfinityScroll(tweets, isLastPage, isFetching);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (id) {
      dispatch(getUserTweetsQuery(id, lastDoc));
    }
  }, [dispatch, id, lastDoc]);

  useEffect(() => {
    return () => {
      dispatch(resetUserTweets());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => setIsOpen(true);

  return (
    <StyledPage>
      {isOpen && (
        <Modal close={() => setIsOpen(false)}>
          <EditProfile />
        </Modal>
      )}
      <ImageContainer />
      <UserInfoContainer>
        <FlexRow>
          <UserImgContainer>
            <UserPhoto src={image || ""} />
          </UserImgContainer>
          {isCurrentUser && <EditButton onClick={handleClick}>Edit profile</EditButton>}
        </FlexRow>

        <H5>{name}</H5>
        <LinkGrey>{email}</LinkGrey>
        <P>{email}</P>
      </UserInfoContainer>
      {isCurrentUser && <CreateTweet />}
      <TweetsTitle>Tweets</TweetsTitle>
      <TweetsList tweets={tweets} error={null} />
      {isFetching && <LoadingSpinner />}
    </StyledPage>
  );
};
