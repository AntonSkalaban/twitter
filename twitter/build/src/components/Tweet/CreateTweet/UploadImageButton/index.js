import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useRef } from "react";
import { FormImageInput } from "components/Form/FormImageInput";
import ImageIcon from "assets/images/svg/image.svg?react";
export const UploadImageButton = ({ control, onUpload }) => {
    const imageInputRef = useRef(null);
    const handleImageUpload = (e) => {
        e.preventDefault();
        imageInputRef.current?.click();
    };
    return (_jsxs(_Fragment, { children: [_jsxs("button", { onClick: handleImageUpload, children: [" ", _jsx(ImageIcon, {})] }), _jsx(FormImageInput, { name: "image", ref: imageInputRef, control: control, onUpload: onUpload })] }));
};
