import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { H5, P, UserAvatar } from "styled/index";
import { CreateTweet } from "components/CreateTweet";
import { EditProfile } from "components/EditProfile";
import { Modal } from "components/Modal";
import { PostsContainer } from "components/PostsContainer";
import { getUserTweetsQuery } from "store/sagas";
import { getUser, getUserTweets } from "store/slices";

import {
  EditButton,
  ImageContainer,
  StyledPage,
  TelegramLink,
  TweetsTitle,
  UserImgContainer,
  UserInfoContainer,
} from "./styled";

export const Profile: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id, name, email, image } = useSelector(getUser);
  const { tweets, error, isFetching } = useSelector(getUserTweets);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!id) return navigate("/");

    dispatch(getUserTweetsQuery(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledPage>
      {isOpen && (
        <Modal close={() => setIsOpen(false)}>
          <EditProfile />
        </Modal>
      )}

      <ImageContainer />
      <UserInfoContainer>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <UserImgContainer>
            <UserAvatar
              style={{ position: "absolute", width: "120px", height: "120px", bottom: 0 }}
              src={image || ""}
            />
          </UserImgContainer>
          <EditButton onClick={() => setIsOpen(true)}>Edit profile</EditButton>
        </div>

        <H5>{name}</H5>
        <TelegramLink>{email}</TelegramLink>
        <P>{email}</P>
      </UserInfoContainer>

      <CreateTweet />
      <TweetsTitle>Tweets</TweetsTitle>
      <PostsContainer tweets={tweets} error={error} isFetching={isFetching} />
    </StyledPage>
  );
};
