import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Input } from "styled/index";
import { ErrorMessage } from "components/UI/ErrorMessage";
export const FormInput = forwardRef(({ error, ...props }, ref) => {
    return (_jsxs("div", { children: [_jsx(Input, { ...props, ref: ref }), _jsx(ErrorMessage, { error: error })] }));
});
