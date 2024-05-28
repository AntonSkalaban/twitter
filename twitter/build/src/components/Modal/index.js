import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { createPortal } from "react-dom";
import { Overlay } from "styled/StyledComponents";
import { StyledCloseBtn, StyledModalContainer, StyledModalContent } from "./styled";
export const Modal = ({ children, close }) => {
    return (_jsx(_Fragment, { children: createPortal(_jsxs(_Fragment, { children: [_jsx(Overlay, {}), _jsxs(StyledModalContainer, { children: [_jsx(StyledCloseBtn, { onClick: close, children: _jsx("p", { children: "X" }) }), _jsx(StyledModalContent, { children: children })] })] }), document.body) }));
};
