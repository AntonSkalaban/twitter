import { User } from "types/user";

export interface ProfileProps {
  user: User;
  isCurrentUser?: boolean;
}
