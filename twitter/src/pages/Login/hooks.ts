import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

import { UserApi } from "api";
import { setUser } from "store/slices";
import { auth } from "constants/index";
import { PagePathsEnum } from "types";

import { telRegExp } from "./constants";
import { FormValues } from "./types";

export const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState("");

  const login = async (data: FormValues) => {
    try {
      setIsFetching(true);
      const { emailOrPhone, password } = data;

      let userFromDB;
      let email = emailOrPhone;

      const isPhoneNumber = telRegExp.test(data.emailOrPhone);

      if (isPhoneNumber) {
        userFromDB = (await UserApi.getUsers("phone", emailOrPhone))[0];
        if (!userFromDB) return;
        email = userFromDB.email;
      }

      const { user } = await signInWithEmailAndPassword(auth, email, password);
      if (!user) return;
      userFromDB ??= await UserApi.getUserDoc(user.uid);

      if (userFromDB) dispatch(setUser(userFromDB));
      navigate("/" + PagePathsEnum.Profile);
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : "Unknown error occurred";
      setError(errorMessage);
    }
    setIsFetching(false);
  };

  return { login, isFetching, error };
};
