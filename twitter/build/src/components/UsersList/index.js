import { jsx as _jsx } from "react/jsx-runtime";
import { P } from "styled/StyledComponents";
import { UserCard } from "components/UserCard";
export const UsersList = ({ users, error, isFetching }) => {
    if (isFetching)
        return _jsx(P, { children: "Fetching..." });
    if (error)
        return _jsx(P, { children: error });
    return (_jsx("div", { children: users.map((user) => (_jsx(UserCard, { user: user }, user.id))) }));
};
