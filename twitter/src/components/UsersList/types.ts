import { User } from "types/index";

export interface UsersListProps {
  users: User[];
  isFetching: boolean;
  error: null | string;
}
