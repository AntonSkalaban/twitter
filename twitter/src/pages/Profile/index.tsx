import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FlexRow, H5, LinkGrey, P, StyledPage, UserAvatar } from "styled/index";
import { EditProfile } from "components/EditProfile";
import { Modal } from "components/Modal";
import { CreateTweet } from "components/Tweet/CreateTweet";
import { TweetsList } from "components/TweetsList";
import { getUserTweetsQuery } from "store/sagas";
import { getUserTweets } from "store/slices";

import { ProfileProps } from "./types";
import {
  EditButton,
  ImageContainer,
  TweetsTitle,
  UserImgContainer,
  UserInfoContainer,
} from "./styled";

export const Profile: FC<ProfileProps> = ({ user, isCurrentUser }) => {
  const dispatch = useDispatch();

  const { id, name, email, image } = user;

  const { tweets, isFetching } = useSelector(getUserTweets);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(getUserTweetsQuery(id));
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
            <UserAvatar
              style={{ position: "absolute", width: "120px", height: "120px", bottom: 0 }}
              src={image || ""}
            />
          </UserImgContainer>
          <EditButton onClick={handleClick}>Edit profile</EditButton>
        </FlexRow>

        <H5>{name}</H5>
        <LinkGrey>{email}</LinkGrey>
        <P>{email}</P>
      </UserInfoContainer>
      {isCurrentUser && <CreateTweet />}
      <TweetsTitle>Tweets</TweetsTitle>
      <TweetsList tweets={tweets} isFetching={isFetching} error={null} />
    </StyledPage>
  );
};
