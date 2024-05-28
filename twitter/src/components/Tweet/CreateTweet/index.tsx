import { FC, KeyboardEvent, useEffect, useState } from "react";
import { Control, Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, UserAvatar } from "styled/StyledComponents";
import { UserAvatarContainer } from "styled/StyledComponents";
import { StyledTweet, TweetContent } from "components/Tweet/styled";
import { TweetImage } from "components/Tweet/TweetImage";
import { createTweetQuery } from "store/sagas";
import { getUser } from "store/slices";
import { getAddPostStatus } from "store/slices/addPostSlice";

import { defaultValues, schema } from "./constants";
import { autoResize } from "./helpers";
import { CreateTweetFormProps, FormValues } from "./types";
import { UploadImageButton } from "./UploadImageButton";
import { ControllersRow, TweetTextArea } from "./styled";

export const CreateTweet: FC<CreateTweetFormProps> = ({ onCreated }) => {
  const dispatch = useDispatch();

  const { id, name, image } = useSelector(getUser);

  const { isFetching } = useSelector(getAddPostStatus);

  const [base64String, setBase64String] = useState<null | string>(null);

  const { control, handleSubmit, reset, formState, watch } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues,
    mode: "onSubmit",
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ title: "" });
      setBase64String(null);
      if (onCreated) onCreated();
    }
  }, [formState.isSubmitSuccessful, onCreated, reset]);

  const hanldeKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    autoResize(e.target as HTMLTextAreaElement);
  };

  const onSubmit = (data: FormValues) => {
    dispatch(
      createTweetQuery(
        {
          userId: id,
          title: data.title,
          image: base64String,
          createdAt: new Date().getTime(),
          likedUsers: [],
        },
        { userName: name, userImage: image },
      ),
    );
  };

  return (
    <StyledTweet>
      <UserAvatarContainer>{image && <UserAvatar src={image} />}</UserAvatarContainer>

      <TweetContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="title"
            render={({ field }) => (
              <TweetTextArea {...field} placeholder="What’s happening" onKeyDown={hanldeKeyDown} />
            )}
          />

          <TweetImage image={base64String} />

          <ControllersRow>
            <UploadImageButton
              control={control as unknown as Control<{ image: string }>}
              onUpload={(value) => setBase64String(value)}
            />

            <Button
              data-testid="create-tweet-btn"
              $width="120px"
              style={{ height: "50px" }}
              $color="blue"
              disabled={isFetching || !watch("title")}
            >
              {isFetching ? "Fetching..." : "Tweet"}
            </Button>
          </ControllersRow>
        </form>
      </TweetContent>
    </StyledTweet>
  );
};
