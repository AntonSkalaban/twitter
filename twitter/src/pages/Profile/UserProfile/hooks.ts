import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { UserApi } from "api/index";
import { User } from "types/index";

export const useGetUserByParams = () => {
  const { id: openUserId } = useParams();

  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState<null | User>(null);

  useEffect(() => {
    const fetchUser = async (userId: string) => {
      try {
        setIsFetching(true);
        const user = await UserApi.getUserDoc(userId);

        if (user) setUser(user);
      } catch (e) {
        setError("error");
      }
      setIsFetching(false);
    };

    if (openUserId) fetchUser(openUserId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { user, isFetching, error };
};
