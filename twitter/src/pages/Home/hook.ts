import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { signInWithGoogle, UserApi } from "api/index";
import { User } from "types/index";

export const useSignInWithGoogle = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState<null | User>(null);

  const signInWithGoogleHanlder = async () => {
    try {
      setIsFetching(true);

      const user = await signInWithGoogle();

      const userDoc = await UserApi.getUserDoc(user.uid);

      const activeUser = userDoc
        ? {
            id: userDoc.id,
            name: userDoc.name,
            email: userDoc.email,
            image: userDoc.image,
            phone: userDoc.phone,
            birth: userDoc.birth,
          }
        : {
            id: user.uid,
            name: user.displayName || "",
            email: user.email || "",
            image: user.photoURL,
            phone: user.phoneNumber,
            birth: null,
          };

      if (userDoc) {
        navigate("/" + PagePathsEnum.Profile);
      } else {
        UserApi.addUserDoc(activeUser);
        setIsOpen(true);
      }
      dispatch(setUser(activeUser));
    } catch (e) {
      setError("error");
    }
    setIsFetching(false)
  };

  return { signInWithGoogleHanlder, isFetching, error };
};
