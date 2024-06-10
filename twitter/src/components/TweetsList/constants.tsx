import { TweetSmall } from "components";
import { Tweet } from "types";

import { TweetBig } from "..";

export const components = {
  big: (tweet: Tweet) => <TweetBig tweet={tweet} />,
  small: (tweet: Tweet) => <TweetSmall tweet={tweet} />,
};
