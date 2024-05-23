import { FC } from "react";

import { P } from "styled/StyledComponents";
import { UserCard } from "components/UserCard";

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
