import { FC } from "react";

import { P } from "styled";
import { UserCard } from "components";

import { UsersListProps } from "./types";

export const UsersList: FC<UsersListProps> = ({ users, error, isFetching }) => {
  if (isFetching) return <P>Fetching...</P>;
  if (error) return <P>{error}</P>;

  return (
    <div>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};
