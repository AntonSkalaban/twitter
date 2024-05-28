import { useEffect, useState } from "react";

import { Tweet } from "types/post";

export const useInfinityScroll = (tweets: Tweet[], isLastPage: boolean, isFetching: boolean) => {
  const [lastDoc, setLastDoc] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (scrolledToBottom && !isFetching && !isLastPage && tweets.length) {
        setLastDoc(tweets[tweets.length - 1].createdAt);
      }
    };

    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll);
  }, [isFetching, isLastPage, tweets]);

  return lastDoc;
};
