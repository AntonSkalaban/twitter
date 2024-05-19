import { FC, MouseEvent, useRef, useState } from "react";
import { Control, Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { updatePassword, updateProfile } from "firebase/auth";

import { UserApi } from "api/index";
import { Button, UserAvatar } from "styled/index";
import { FormImageInput } from "components/Form/FormImageInput";
import { FormInput } from "components/Form/FormInput";
import { ErrorMessage } from "components/UI/ErrorMessage";
import { getUser, updateUser } from "store/slices";
import { auth } from "constants/index";

import { schema } from "./constansts";
import { getDefaultValues } from "./helpers";
import { FormValues } from "./types";

export const EditProfile: FC = () => {
  const dispatch = useDispatch();

  const user = useSelector(getUser);

  const imageInputRef = useRef<HTMLInputElement>(null);

  const [base64String, setBase64String] = useState(user.image);

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: getDefaultValues(user),
  });

  const [isFetching, setIsFetching] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleImageUpload = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    imageInputRef.current?.click();
  };

  const onSubmit = async (data: FormValues) => {
    const { name, password } = data;
    if (!auth.currentUser) return;

    try {
      setErrorMessage("");
      setIsFetching(true);
      if (user.name !== name || user.image !== base64String) {
        await updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: base64String,
        });

        await UserApi.updateUserDoc(user.id, { name, image: base64String });
        dispatch(updateUser({ name, image: base64String }));
      }

      if (password) {
        updatePassword(auth.currentUser, password);
      }
    } catch (e) {
      setErrorMessage("fbError");
    }
    setIsFetching(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ width: "120px", height: "120px" }} onClick={handleImageUpload}>
          <UserAvatar src={base64String || ""} />
        </div>

        <FormImageInput
          name="image"
          ref={imageInputRef}
          control={control as unknown as Control<{ [key: string]: string }>}
          onUpload={(image) => setBase64String(image)}
        />

        <Controller
          name="name"
          control={control}
          render={({ field, formState: { errors } }) => (
            <FormInput {...field} placeholder="Name" error={errors.name?.message} />
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field, formState: { errors } }) => (
            <FormInput {...field} placeholder="Email" error={errors.email?.message} />
          )}
        />

        <Controller
          name="phone"
          control={control}
          render={({ field, formState: { errors } }) => (
            <FormInput
              {...field}
              type="tel"
              maxLength={11}
              placeholder="Phone (80XXYYYYYYY)"
              error={errors.phone?.message}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field, formState: { errors } }) => (
            <FormInput
              {...field}
              type="password"
              maxLength={11}
              placeholder="Password"
              error={errors.password?.message}
            />
          )}
        />
        <ErrorMessage error={errorMessage} />
        <Button disabled={isFetching}>Save</Button>
      </form>
    </div>
  );
};
