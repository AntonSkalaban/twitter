import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { P } from "styled/index";
import { Profile } from "..";
import { useGetUserByParams } from "./hooks";
export const UserProfile = () => {
    const { user, isFetching, error } = useGetUserByParams();
    if (error)
        return _jsxs(P, { children: ["Error: ", error] });
    if (!user)
        return _jsx(P, { children: "User not found" });
    if (isFetching)
        return _jsx(P, { children: "Fetching..." });
    return _jsx(Profile, { user: user, isCurrentUser: false });
};
