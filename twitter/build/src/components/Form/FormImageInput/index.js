import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { Controller } from "react-hook-form";
import { convertImageToBase64 } from "utils/convertImageToBase64";
export const FormImageInput = forwardRef(({ control, name, onUpload }, ref) => {
    const inputRef = useRef(null);
    useImperativeHandle(ref, () => ({
        click: () => {
            inputRef.current?.click();
        },
        files: inputRef.current?.files,
    }));
    const uploadImageDisplay = async () => {
        const files = inputRef.current?.files;
        if (!files)
            return;
        const uploadedFile = files[0];
        if (uploadedFile.size > 1048576)
            return;
        const base64String = (await convertImageToBase64(uploadedFile));
        onUpload(base64String);
    };
    return (_jsx(Controller, { name: name, control: control, render: ({ field }) => (_jsx("input", { ...field, ref: inputRef, type: "file", onChange: uploadImageDisplay, accept: ".jpg, .png", hidden: true })) }));
});
