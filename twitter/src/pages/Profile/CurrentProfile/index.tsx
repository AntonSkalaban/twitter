import { useSelector } from "react-redux";

import { getUser } from "store/slices";

import { Profile } from "..";

export const CurrentProfile = () => {
  const user = useSelector(getUser);
  return <Profile user={user} isCurrentUser={true} />;
};
