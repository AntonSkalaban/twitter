import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoadingSpinner, StyledPage } from "styled/index";
import { CreateTweet } from "components/Tweet/CreateTweet";
import { TweetsList } from "components/TweetsList";
import { getTweetsQuery } from "store/sagas";
import { getTweets, getUser, resetTweets } from "store/slices";
import { useInfinityScroll } from "hooks/index";
export const Feed = () => {
    const dispatch = useDispatch();
    const { id } = useSelector(getUser);
    const { tweets, total, error, isFetching } = useSelector(getTweets);
    const isLastPage = total <= tweets.length;
    const lastDoc = useInfinityScroll(tweets, isLastPage, isFetching);
    useEffect(() => {
        if (id) {
            dispatch(getTweetsQuery(lastDoc));
        }
    }, [dispatch, id, lastDoc]);
    useEffect(() => {
        return () => {
            dispatch(resetTweets());
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (_jsxs(StyledPage, { children: [_jsx(CreateTweet, {}), _jsx(TweetsList, { tweets: tweets, error: error }), isFetching && _jsx(LoadingSpinner, {})] }));
};
