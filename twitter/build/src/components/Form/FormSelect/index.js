import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, useState } from "react";
import { ErrorMessage } from "components/UI/ErrorMessage";
import { useClickOutside } from "hooks";
import VectorIcon from "assets/images/svg/vector.svg?react";
import { SelectBtn, SelectContent, SelectOption, SelectWrapper, StyledSelect } from "./styled";
export const FormSelect = forwardRef(({ title, options, error, onChange, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useClickOutside(() => setIsOpen(false));
    const handleClick = () => {
        setIsOpen((prev) => !prev);
    };
    const handleSelect = (value) => () => {
        onChange(String(value));
    };
    return (_jsxs("div", { children: [_jsx("select", { ...props, ref: ref, onChange: (e) => e.target.value, hidden: true, children: options.map(({ name, value }) => (_jsxs("option", { value: value, children: [" ", name] }, value))) }), _jsxs(SelectWrapper, { ref: selectRef, onClick: handleClick, children: [_jsxs(StyledSelect, { "data-testid": "select-title", children: [title, _jsx(SelectBtn, { children: _jsx(VectorIcon, {}) })] }), isOpen && (_jsx(SelectContent, { "data-testid": "select-content", children: options.map(({ name, value }) => (_jsx(SelectOption, { onClick: handleSelect(value), children: name }, value))) }))] }), _jsx(ErrorMessage, { error: error })] }));
});
