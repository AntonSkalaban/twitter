import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from "styled/index";
export const FormButton = ({ title, isFetching }) => {
    return (_jsx(Button, { "$color": "blue", disabled: isFetching, children: isFetching ? "Fetching..." : title }));
};
