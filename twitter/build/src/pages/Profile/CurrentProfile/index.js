import { jsx as _jsx } from "react/jsx-runtime";
import { useSelector } from "react-redux";
import { getUser } from "store/slices";
import { Profile } from "..";
export const CurrentProfile = () => {
    const user = useSelector(getUser);
    return _jsx(Profile, { user: user, isCurrentUser: true });
};
