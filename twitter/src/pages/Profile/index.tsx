import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Button, H5, P, UserAvatar } from "styled/index";
import { CreateTweet } from "components/CreateTweet";
import { EditProfile } from "components/EditProfile";
import { Modal } from "components/Modal";
import { PostsContainer } from "components/PostsContainer";
import { getUserTweetsQuery } from "store/sagas";
import { getUser, getUserTweets } from "store/slices";

import { ImageContainer, TelegramLink, UserImgContainer, UserInfoContainer } from "./styled";

export const Profile: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector(getUser);
  const { tweets, error, isFetching } = useSelector(getUserTweets);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!user.id) return navigate("/");

    dispatch(getUserTweetsQuery(user.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main style={{ maxWidth: "920px" }}>
      {isOpen && (
        <Modal close={() => setIsOpen(false)}>
          <EditProfile />
        </Modal>
      )}

      <ImageContainer />
      <UserInfoContainer>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <UserImgContainer>
            {user?.image && (
              <UserAvatar
                style={{ position: "absolute", width: "120px", height: "120px", bottom: 0 }}
                src={user?.image}
              />
            )}
          </UserImgContainer>

          <Button $width="120px" onClick={() => setIsOpen(true)}>
            Edit profile
          </Button>
        </div>

        <H5>{user.name}</H5>
        <TelegramLink>{user.email}</TelegramLink>
        <P>{user.email}</P>
      </UserInfoContainer>

      <CreateTweet />
      <PostsContainer tweets={tweets} error={error} isFetching={isFetching} />
    </main>
  );
};
