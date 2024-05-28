import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, UserAvatar } from "styled/StyledComponents";
import { UserAvatarContainer } from "styled/StyledComponents";
import { StyledTweet, TweetContent } from "components/Tweet/styled";
import { TweetImage } from "components/Tweet/TweetImage";
import { createTweetQuery } from "store/sagas";
import { getUser } from "store/slices";
import { getAddPostStatus } from "store/slices/addPostSlice";
import { defaultValues, schema } from "./constants";
import { autoResize } from "./helpers";
import { UploadImageButton } from "./UploadImageButton";
import { ControllersRow, TweetTextArea } from "./styled";
export const CreateTweet = ({ onCreated }) => {
    const dispatch = useDispatch();
    const { id, name, image } = useSelector(getUser);
    const { isFetching } = useSelector(getAddPostStatus);
    const [base64String, setBase64String] = useState(null);
    const { control, handleSubmit, reset, formState, watch } = useForm({
        resolver: yupResolver(schema),
        defaultValues,
        mode: "onSubmit",
    });
    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({ title: "" });
            setBase64String(null);
            if (onCreated)
                onCreated();
        }
    }, [formState.isSubmitSuccessful, onCreated, reset]);
    const hanldeKeyDown = (e) => {
        autoResize(e.target);
    };
    const onSubmit = (data) => {
        dispatch(createTweetQuery({
            userId: id,
            title: data.title,
            image: base64String,
            createdAt: new Date().getTime(),
            likedUsers: [],
        }, { userName: name, userImage: image }));
    };
    return (_jsxs(StyledTweet, { children: [_jsx(UserAvatarContainer, { children: image && _jsx(UserAvatar, { src: image }) }), _jsx(TweetContent, { children: _jsxs("form", { onSubmit: handleSubmit(onSubmit), children: [_jsx(Controller, { control: control, name: "title", render: ({ field }) => (_jsx(TweetTextArea, { ...field, placeholder: "What\u2019s happening", onKeyDown: hanldeKeyDown })) }), _jsx(TweetImage, { image: base64String }), _jsxs(ControllersRow, { children: [_jsx(UploadImageButton, { control: control, onUpload: (value) => setBase64String(value) }), _jsx(Button, { "data-testid": "create-tweet-btn", "$width": "120px", style: { height: "50px" }, "$color": "blue", disabled: isFetching || !watch("title"), children: isFetching ? "Fetching..." : "Tweet" })] })] }) })] }));
};
