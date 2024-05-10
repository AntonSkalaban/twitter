import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getUserPosts } from "api/fireStoreApi";
import { Button, H5, P } from "styled/index";
import { Sidebar, TwitterPost } from "components";
import { PostForm } from "components/PostForm";
import { getUser } from "store/slices";
import { Post } from "types/index";

import { ImageContainer, TelegramLink, UserImgContainer, UserInfoContainer } from "./styled";

export const Profile: FC = () => {
  const user = useSelector(getUser);

  const [posts, setPosts] = useState([] as Post[]);

  const navigate = useNavigate();

  useEffect(() => {
    const getPosts = async (userId: string) => {
      const posts = await getUserPosts(userId);
      setPosts(posts);
    };

    if (!user.id) return navigate("/");
    getPosts(user.id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ maxWidth: "920px" }}>
        <ImageContainer />
        <UserInfoContainer>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <UserImgContainer>
              <div
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  backgroundColor: "pink",
                  position: "absolute",
                  bottom: 0,
                }}
              />
            </UserImgContainer>
            <Button $width="120px">Edit profile</Button>
          </div>

          <H5>{user.name}</H5>
          <TelegramLink>{user.email}</TelegramLink>
          <P>{user.email}</P>
        </UserInfoContainer>
        <PostForm />

        {posts.map((post) => (
          <TwitterPost key={post.id} post={post} />
        ))}
      </main>
    </div>
  );
};
