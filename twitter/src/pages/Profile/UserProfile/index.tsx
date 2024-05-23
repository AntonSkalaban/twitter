import { P } from "styled/index";

import { Profile } from "..";
import { useGetUserByParams } from "./hooks";

export const UserProfile = () => {
  const { user, isFetching, error } = useGetUserByParams();

  if (error) return <P>Error: {error}</P>;
  if (!user) return <P>User not found</P>;
  if (isFetching) return <P>Fetching...</P>;

  return <Profile user={user} isCurrentUser={false} />;
};
