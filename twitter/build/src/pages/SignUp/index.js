import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { UserApi } from "api/index";
import { StyledForm } from "styled";
import { DateSelect } from "components/DateSelect";
import { FormInput } from "components/Form/FormInput";
import { FormButton } from "components/index";
import { Modal } from "components/Modal";
import { PasswordForm } from "components/PasswordForm";
import { setUser } from "store/slices";
import { auth } from "constants/index";
import TwitterIcon from "assets/images/svg/twitter-logo.svg?react";
import { birthdayText, defaultValues, schema } from "./constansts";
import { BirthdayContainer, SignUpH3, SignUpH4, SignUpInpitsContainer, SignUpP, SignUpWrapper, } from "./styled";
export const SignUp = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { control, watch, handleSubmit } = useForm({
        resolver: yupResolver(schema),
        defaultValues,
        mode: "onSubmit",
    });
    const [isPasswordOpen, setIsPasswordOpen] = useState(false);
    const name = watch("name");
    const email = watch("email");
    const phone = watch("phone");
    const { year, month, day } = watch("birthday");
    const onSubmit = () => {
        setIsPasswordOpen(true);
    };
    const closePasswordForm = () => setIsPasswordOpen(false);
    const hanldePasswordSubmit = async (password) => {
        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);
            if (!user)
                return;
            const body = {
                id: user.uid,
                name,
                email,
                image: null,
                phone,
                birth: new Date(+year, +month, +day).toISOString(),
            };
            UserApi.addUserDoc(body);
            dispatch(setUser(body));
            closePasswordForm();
            navigate("/profile");
        }
        catch (e) {
            if (e instanceof FirebaseError) {
                return e.message;
            }
            return "Произошла неизвестная ошибка. Пожалуйста, попробуйте еще раз.";
        }
    };
    return (_jsxs(SignUpWrapper, { children: [isPasswordOpen && (_jsx(Modal, { close: closePasswordForm, children: _jsx(PasswordForm, { onSubmit: hanldePasswordSubmit }) })), _jsx(TwitterIcon, {}), _jsx(SignUpH3, { children: "Create an account" }), _jsxs(StyledForm, { onSubmit: handleSubmit(onSubmit), noValidate: true, children: [_jsxs(SignUpInpitsContainer, { children: [_jsx(Controller, { control: control, name: "name", render: ({ field, formState }) => (_jsx(FormInput, { ...field, error: formState.errors.name?.message, placeholder: "Name" })) }), _jsx(Controller, { control: control, name: "email", render: ({ field, formState }) => (_jsx(FormInput, { ...field, error: formState.errors.email?.message, placeholder: "Email" })) }), _jsx(Controller, { control: control, name: "phone", render: ({ field, formState }) => (_jsx(FormInput, { ...field, onChange: (e) => field.onChange(e.target.value.replace(/[^+\d]/g, "")), error: formState.errors.phone?.message, maxLength: 11, type: "tel", placeholder: "Phone (80XXYYYYYYY)" })) })] }), _jsx(NavLink, { to: "/", children: "Use email" }), _jsxs(BirthdayContainer, { children: [_jsx(SignUpH4, { children: "Date of birth" }), _jsx(SignUpP, { children: birthdayText }), _jsx(DateSelect, { control: control })] }), _jsx(FormButton, { title: "Next" })] })] }));
};
