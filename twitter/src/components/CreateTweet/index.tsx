import { FC, KeyboardEvent, useEffect, useState } from "react";
import { Control, Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import {
  Button,
  PostContentContainer,
  PostRow,
  PostWrapper,
  UserAvatar,
  UserAvatarContainer,
} from "styled/StyledComponents";
import { PostImage } from "components/PostImage";
import { addPost } from "store/sagas";
import { getUser } from "store/slices";
import { getAddPostStatus } from "store/slices/addPostSlice";

import { autoResize } from "./helpers";
import { CreateTweetFormProps, FormValues } from "./types";
import { UploadImageButton } from "./UploadImageButton";
import { TweetTextArea } from "./styled";

export const CreateTweet: FC<CreateTweetFormProps> = ({ onCreated }) => {
  const dispatch = useDispatch();

  const user = useSelector(getUser);

  const { isFetching } = useSelector(getAddPostStatus);

  const [base64String, setBase64String] = useState<null | string>(null);

  const { control, handleSubmit, reset, formState } = useForm<FormValues>();

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ title: "" });
    }
    if (onCreated) onCreated();
  }, [formState.isSubmitSuccessful, onCreated, reset]);

  const hanldeKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    autoResize(e.target as HTMLTextAreaElement);
  };

  const onSubmit = (data: FormValues) => {
    dispatch(
      addPost({
        userId: user.id,
        title: data.title,
        image: base64String,
        createdAt: new Date().getTime(),
        likedUsers: [],
      }),
    );
  };

  return (
    <PostWrapper>
      <UserAvatarContainer>{user?.image && <UserAvatar src={user?.image} />}</UserAvatarContainer>

      <PostContentContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="title"
            render={({ field }) => (
              <TweetTextArea {...field} placeholder="What’s happening" onKeyDown={hanldeKeyDown} />
            )}
          />

          <PostImage image={base64String} />

          <PostRow>
            <UploadImageButton
              control={control as unknown as Control<{ image: string }>}
              onUpload={(value) => setBase64String(value)}
            />

            <Button $width="120px" style={{ height: "50px" }} $color="blue" disabled={isFetching}>
              {isFetching ? "Fetching..." : "Tweet"}
            </Button>
          </PostRow>
        </form>
      </PostContentContainer>
    </PostWrapper>
  );
};
