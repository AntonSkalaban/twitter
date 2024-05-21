import { useEffect, useState } from "react";

import { TweetApi } from "api/TweetApi";
import { TweetResponce } from "types/index";

export const useTweetsWithImageQuery = () => {
  const [tweets, setTweet] = useState<TweetResponce[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTweetsWithImage = async () => {
      try {
        setError("");
        setIsFetching(true);
        const tweetResponce = await TweetApi.getTweetsWithImage();
        if (!tweetResponce) return;

        setTweet(tweetResponce);
      } catch (e) {
        setError("error");
      }
      setIsFetching(false);
    };

    fetchTweetsWithImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { tweets, isFetching, error };
};
