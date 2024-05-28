import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "styled";
import { FormInput } from "components/Form/FormInput";
import { defaultValues, schema } from "./const";
import { StyledPasswordForm } from "./style";
export const PasswordForm = ({ onSubmit }) => {
    const { control, setError, handleSubmit } = useForm({
        resolver: yupResolver(schema),
        defaultValues,
    });
    const [isFetching, setIsFetching] = useState(false);
    const hanldeFormSubmit = async (data) => {
        setIsFetching(true);
        const e = await onSubmit(data.password);
        if (e)
            setError("password", { message: e });
        setIsFetching(false);
    };
    return (_jsxs(StyledPasswordForm, { onSubmit: handleSubmit(hanldeFormSubmit), children: [_jsx(Controller, { control: control, name: "password", render: ({ field, formState }) => (_jsx(FormInput, { ...field, type: "password", placeholder: "Password", error: formState.errors.password?.message })) }), _jsx(Button, { "$color": "blue", disabled: isFetching, children: isFetching ? "Fetching..." : "Save" })] }));
};
