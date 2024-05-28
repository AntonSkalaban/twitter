import { jsxs as _jsxs } from "react/jsx-runtime";
export const ErrorMessage = ({ error }) => {
    if (!error)
        return null;
    return _jsxs("p", { style: { color: "red" }, children: [" ", error] });
};
