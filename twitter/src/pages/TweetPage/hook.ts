import { useEffect, useState } from "react";

import { TweetApi } from "api/TweetApi";
import { UserApi } from "api/UserApi";
import { Tweet } from "types/index";

export const useTweetQuery = (tweetId?: string) => {
  const [tweet, setTweet] = useState<null | Tweet>(null);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTweet = async (id: string) => {
      try {
        setError("");
        setIsFetching(true);
        const tweetResponce = await TweetApi.getTweet(id);
        if (!tweetResponce) return;

        const user = await UserApi.getUserDoc(tweetResponce.userId);
        if (!user) return;

        setTweet({ ...tweetResponce, userId: user.id, userName: user.name, userImg: user.image });
      } catch (e) {
        setError("error");
      }
      setIsFetching(false);
    };
    if (!tweetId) return;
    fetchTweet(tweetId);
  }, [tweetId]);

  return { tweet, isFetching, error };
};
