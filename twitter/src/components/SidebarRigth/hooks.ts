import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { UserApi } from "api";
import { getUser } from "store/slices";
import { User } from "types";

export const useGetRandomUsers = () => {
  const [users, setUsers] = useState([] as User[]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState("");

  const { id } = useSelector(getUser);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsFetching(true);
        const users = await UserApi.getUsers();

        if (users) setUsers(users.filter((user) => user.id !== id));
      } catch (e) {
        setError("error");
      }
      setIsFetching(false);
    };

    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { users, isFetching, error };
};
