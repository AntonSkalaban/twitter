import { TweetSmall } from "components/Tweet/TweetSmall";
import { Tweet } from "types/index";

import { TweetBig } from "..";

export const components = {
  big: (tweet: Tweet) => <TweetBig tweet={tweet} />,
  small: (tweet: Tweet) => <TweetSmall tweet={tweet} />,
};
