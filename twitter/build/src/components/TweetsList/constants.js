import { jsx as _jsx } from "react/jsx-runtime";
import { TweetSmall } from "components/Tweet/TweetSmall";
import { TweetBig } from "..";
export const components = {
    big: (tweet) => _jsx(TweetBig, { tweet: tweet }),
    small: (tweet) => _jsx(TweetSmall, { tweet: tweet }),
};
