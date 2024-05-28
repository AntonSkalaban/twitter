import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FlexRow, H5, LinkGrey, LoadingSpinner, P, StyledPage, UserAvatar } from "styled/index";
import { EditProfile } from "components/EditProfile";
import { Modal } from "components/Modal";
import { CreateTweet } from "components/Tweet/CreateTweet";
import { TweetsList } from "components/TweetsList";
import { getUserTweetsQuery } from "store/sagas";
import { getUserTweets, resetUserTweets } from "store/slices";
import { useInfinityScroll } from "hooks/index";
import { EditButton, ImageContainer, TweetsTitle, UserImgContainer, UserInfoContainer, } from "./styled";
export const Profile = ({ user, isCurrentUser }) => {
    const dispatch = useDispatch();
    const { tweets, total, isFetching } = useSelector(getUserTweets);
    const { id, name, email, image } = user;
    const isLastPage = total <= tweets.length;
    const lastDoc = useInfinityScroll(tweets, isLastPage, isFetching);
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        if (id) {
            dispatch(getUserTweetsQuery(id, lastDoc));
        }
    }, [dispatch, id, lastDoc]);
    useEffect(() => {
        return () => {
            dispatch(resetUserTweets());
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const handleClick = () => setIsOpen(true);
    return (_jsxs(StyledPage, { children: [isOpen && (_jsx(Modal, { close: () => setIsOpen(false), children: _jsx(EditProfile, {}) })), _jsx(ImageContainer, {}), _jsxs(UserInfoContainer, { children: [_jsxs(FlexRow, { children: [_jsx(UserImgContainer, { children: _jsx(UserAvatar, { style: { position: "absolute", width: "120px", height: "120px", bottom: 0 }, src: image || "" }) }), _jsx(EditButton, { onClick: handleClick, children: "Edit profile" })] }), _jsx(H5, { children: name }), _jsx(LinkGrey, { children: email }), _jsx(P, { children: email })] }), isCurrentUser && _jsx(CreateTweet, {}), _jsx(TweetsTitle, { children: "Tweets" }), _jsx(TweetsList, { tweets: tweets, error: null }), isFetching && _jsx(LoadingSpinner, {})] }));
};
