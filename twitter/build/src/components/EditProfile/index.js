import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledForm, UserAvatar } from "styled/index";
import { DateSelect } from "components/DateSelect";
import { FormButton } from "components/Form/FormButton";
import { FormImageInput } from "components/Form/FormImageInput";
import { FormInput } from "components/Form/FormInput";
import { ErrorMessage } from "components/UI/ErrorMessage";
import { getUser } from "store/slices";
import { schema } from "./constansts";
import { getDefaultValues } from "./helpers";
import { useEditUser } from "./hook";
import { AvatarContainer } from "./styled";
export const EditProfile = () => {
    const user = useSelector(getUser);
    const { isFetching, errorMessage, trigger } = useEditUser(user);
    const imageInputRef = useRef(null);
    const [base64String, setBase64String] = useState(user.image);
    const { control, handleSubmit } = useForm({
        resolver: yupResolver(schema),
        defaultValues: getDefaultValues(user),
    });
    const handleImageUpload = (e) => {
        e.preventDefault();
        imageInputRef.current?.click();
    };
    const onSubmit = async (data) => {
        await trigger(data, base64String);
    };
    return (_jsx("div", { children: _jsxs(StyledForm, { onSubmit: handleSubmit(onSubmit), children: [_jsx(AvatarContainer, { onClick: handleImageUpload, children: _jsx(UserAvatar, { src: base64String || "" }) }), _jsx(FormImageInput, { name: "image", ref: imageInputRef, control: control, onUpload: (image) => setBase64String(image) }), _jsx(Controller, { name: "name", control: control, render: ({ field, formState: { errors } }) => (_jsx(FormInput, { ...field, placeholder: "Name", error: errors.name?.message })) }), _jsx(Controller, { name: "email", control: control, render: ({ field, formState: { errors } }) => (_jsx(FormInput, { ...field, placeholder: "Email", error: errors.email?.message })) }), _jsx(Controller, { name: "phone", control: control, render: ({ field, formState: { errors } }) => (_jsx(FormInput, { ...field, type: "tel", maxLength: 11, placeholder: "Phone (80XXYYYYYYY)", error: errors.phone?.message })) }), _jsx(Controller, { name: "password", control: control, render: ({ field, formState: { errors } }) => (_jsx(FormInput, { ...field, type: "password", maxLength: 11, placeholder: "Password", error: errors.password?.message })) }), _jsx(ErrorMessage, { error: errorMessage }), _jsx(DateSelect, { control: control }), _jsx(FormButton, { title: "Save", isFetching: isFetching })] }) }));
};
