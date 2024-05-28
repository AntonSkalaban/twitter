import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserApi } from "api/index";
export const useGetUserByParams = () => {
    const { id: openUserId } = useParams();
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState("");
    const [user, setUser] = useState(null);
    useEffect(() => {
        const fetchUser = async (userId) => {
            try {
                setIsFetching(true);
                const user = await UserApi.getUserDoc(userId);
                if (user)
                    setUser(user);
            }
            catch (e) {
                setError("error");
            }
            setIsFetching(false);
        };
        if (openUserId)
            fetchUser(openUserId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return { user, isFetching, error };
};
