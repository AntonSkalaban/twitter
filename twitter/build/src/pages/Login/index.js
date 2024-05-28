import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Controller, useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { H2, StyledForm } from "styled";
import { FormInput } from "components/Form/FormInput";
import { FormButton } from "components/index";
import { ErrorMessage } from "components/UI/ErrorMessage";
import TwitterIcon from "assets/images/svg/twitter-logo.svg?react";
import { defaultValues, schema } from "./constants";
import { useLogin } from "./hooks";
import { LoginWrapper } from "./styled";
export const Login = () => {
    const { login, isFetching, error } = useLogin();
    const { control, handleSubmit } = useForm({
        resolver: yupResolver(schema),
        defaultValues,
        mode: "onSubmit",
    });
    const onSubmit = (data) => {
        login(data);
    };
    return (_jsxs(LoginWrapper, { children: [_jsx(TwitterIcon, {}), _jsx(H2, { children: "Log in to Twitter" }), _jsxs(StyledForm, { onSubmit: handleSubmit(onSubmit), children: [_jsx(Controller, { control: control, name: "emailOrPhone", render: ({ field, formState }) => (_jsx(FormInput, { ...field, "data-testid": "emailOrPhone", error: formState.errors.emailOrPhone?.message, placeholder: "Email of phone" })) }), _jsx(Controller, { control: control, name: "password", render: ({ field, formState }) => (_jsx(FormInput, { ...field, "data-testid": "password", type: "password", error: formState.errors.password?.message, placeholder: "Password" })) }), _jsx(ErrorMessage, { error: error }), _jsx(FormButton, { title: "Log in", isFetching: isFetching })] }), _jsx(NavLink, { to: "/sign-up", style: { textAlign: "end" }, children: "Sign up to Twitter" })] }));
};
