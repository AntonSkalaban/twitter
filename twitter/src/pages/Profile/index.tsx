import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FlexRow, H5, LinkGrey, P, StyledPage, UserAvatar } from "styled/index";
import { CreateTweet } from "components/CreateTweet";
import { EditProfile } from "components/EditProfile";
import { Modal } from "components/Modal";
import { TweetsList } from "components/TweetsList";
import { getUserTweetsQuery } from "store/sagas";
import { getUser, getUserTweets } from "store/slices";

import {
  EditButton,
  ImageContainer,
  TweetsTitle,
  UserImgContainer,
  UserInfoContainer,
} from "./styled";

export const Profile: FC = () => {
  const dispatch = useDispatch();

  const { id, name, email, image } = useSelector(getUser);
  const { tweets, error, isFetching } = useSelector(getUserTweets);

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

      <CreateTweet />
      <TweetsTitle>Tweets</TweetsTitle>
      <TweetsList tweets={tweets} error={error} isFetching={isFetching} />
    </StyledPage>
  );
};
