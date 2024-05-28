import { useEffect, useState } from "react";
export const useInfinityScroll = (tweets, isLastPage, isFetching) => {
    const [lastDoc, setLastDoc] = useState(null);
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
