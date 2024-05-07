import { FC } from "react";
import { useSelector } from "react-redux";

import { getUser } from "store/slices";

export const Profile: FC = () => {
  const user = useSelector(getUser);
  return <>{JSON.stringify(user)}</>;
};
