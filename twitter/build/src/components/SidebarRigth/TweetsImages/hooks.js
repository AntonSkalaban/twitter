import { useEffect, useState } from "react";
import { TweetApi } from "api/TweetApi";
export const useTweetsWithImageQuery = () => {
    const [tweets, setTweet] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState("");
    useEffect(() => {
        const fetchTweetsWithImage = async () => {
            try {
                setError("");
                setIsFetching(true);
                const tweetResponce = await TweetApi.getTweetsWithImage();
                if (!tweetResponce)
                    return;
                setTweet(tweetResponce);
            }
            catch (e) {
                const errorMessage = e instanceof Error ? e.message : "Unknown error occurred";
                setError(errorMessage);
            }
            setIsFetching(false);
        };
        fetchTweetsWithImage();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return { tweets, isFetching, error };
};
